package user

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Handler struct {
	Service
}

func NewHandler(service Service) *Handler {
	return &Handler{Service: service}
}

func (h *Handler) CreateUser(c *gin.Context) {
	var user CreateUserRequest

	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"invalid request": err.Error()})
		return
	}

	res, err := h.Service.CreateUser((c.Request.Context()), &user)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"interval server error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, res)
}

func (h *Handler) Login(c *gin.Context) {
	var user LoginUserRequest
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"invalid request": err.Error()})
		return
	}

	u, err := h.Service.Login(c.Request.Context(), &user)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"interval server error": err.Error()})
		return
	}

	c.SetCookie("jwt", u.accessToken, 3600, "/", "localhost", false, true)

	res := &LoginUserResponse{
		Username: u.Username,
		ID:       u.ID,
	}

	c.JSON(http.StatusOK, res)
}

func (h *Handler) Logout(c *gin.Context) {
	c.SetCookie("jwt", "", -1, "/", "localhost", false, true)
	c.JSON(http.StatusOK, gin.H{"message": "logged out"})
}
