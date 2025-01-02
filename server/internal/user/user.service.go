package user

import (
	"context"
	"server/internal/util"
	"strconv"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

const (
	secretKey = "secret"
)

type service struct {
	Repository
	timeout time.Duration
}

func NewService(repository Repository) Service {
	return &service{Repository: repository, timeout: time.Duration(2) * time.Second}
}

func (s *service) CreateUser(c context.Context, req *CreateUserRequest) (*CreateUserResponse, error) {
	ctx, cancel := context.WithTimeout(c, s.timeout)
	defer cancel()

	hashedPassword, error := util.HashPassword(req.Password)
	if error != nil {
		return nil, error
	}

	user := &User{
		Username: req.Username,
		Email:    req.Email,
		Password: hashedPassword,
	}

	r, error := s.Repository.CreateUser(ctx, user)
	if error != nil {
		return nil, error
	}

	res := &CreateUserResponse{
		ID:       strconv.Itoa(int(r.ID)),
		Username: r.Username,
		Email:    r.Email,
	}

	return res, nil
}

type MyJWTClaims struct {
	ID       string `json:"id"`
	Username string `json:"username"`
	jwt.RegisteredClaims
}

func (s *service) Login(c context.Context, req *LoginUserRequest) (*LoginUserResponse, error) {
	ctx, cancel := context.WithTimeout(c, s.timeout)
	defer cancel()

	user, error := s.Repository.GetUserByEmail(ctx, req.Email)
	if error != nil {
		return &LoginUserResponse{}, error
	}

	err := util.CheckPassword(req.Password, user.Password)
	if err != nil {
		return &LoginUserResponse{}, err
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, MyJWTClaims{
		ID:       strconv.Itoa(int(user.ID)),
		Username: user.Username,
		RegisteredClaims: jwt.RegisteredClaims{
			Issuer:    strconv.Itoa(int(user.ID)),
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Hour * 24)),
		},
	})

	signedString, err := token.SignedString(([]byte(secretKey)))
	if err != nil {
		return &LoginUserResponse{}, err
	}

	return &LoginUserResponse{
		accessToken: signedString,
		ID:          strconv.Itoa(int(user.ID)),
		Username:    user.Username,
	}, nil
}
