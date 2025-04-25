# Simple Calculator App (Dockerized)

This is a simple calculator app consisting of a Node.js backend and a React + Vite frontend. This project utilizes containers to simulate a production-like environment in development.

## 🧱 Project Structure

- `backend/`: Express app that provides a `/calculate` API endpoint
- `frontend/`: React + Vite frontend that communicates with the backend and is served using Nginx
- `docker-compose.yaml`: Defines both services

## 🚀 Getting Started

Make sure you have the following installed:

- [Docker](https://www.docker.com/)

### 🔧 Run the App

To build and start the containers, run:

```bash
docker-compose up --build
```

Once running, the frontend of the app will be available in your browser at:
👉 http://localhost:8080
