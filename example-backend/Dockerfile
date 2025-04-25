# --- Stage 1: Build stage ---
FROM golang:1.16-alpine as build-stage

# Set the working directory inside the container
WORKDIR /usr/src/app
    
# Copy the project files into the container
COPY . .
    
# Set environment variable
ENV REQUEST_ORIGIN=http://localhost
    
# Build the Go project with CGO disabled (to avoid dependencies on system libraries)
RUN CGO_ENABLED=0 go build -o server .
    
# --- Stage 2: Production image ---
FROM scratch
    
# Set the working directory inside the container
WORKDIR /usr/src/app
    
# Copy the statically linked Go binary from the build stage
COPY --from=build-stage /usr/src/app/server /server

# No need to create user since using scratch
    
# Expose the port the app runs on
EXPOSE 8080
    
# Command to run the Go server
CMD ["/server"]

# Run commands:
# docker build -t example-backend .
# Go to the root of the project:
# docker compose up