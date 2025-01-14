# Real-Time Chat Application

This is a full-stack real-time chat application designed as a personal project to study and explore concepts in Golang, WebSocket connections, and modern frontend development using Next.js.

---

## 🚀 Features

### Server
- **Technology**: Golang
- **Architecture**: Clean Architecture
- **Functionality**:
  - REST API
  - WebSocket connections for real-time communication
- **Setup**:
  ```bash
  make postgresinit
  make createdb
  make migrateup
  go run server/cmd/main.go
  ```
- Runs on 8080


### Client
- **Technology**: NextJS
- **Design Pattern**: Feature-Sliced Design + Domain-Driven Design (DDD)
- **Setup**:
  ```bash
   yarn dev
  ```
- Runs on 3000

🤝 Contributing
- This project is for personal study, but feel free to fork and explore. Contributions and suggestions are always welcome! 😊

