# Use Go 1.16 as the base image
FROM golang:1.16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy project files
COPY . .

# Set environment variable
ENV REQUEST_ORIGIN=http://localhost

# Build the Go project
RUN go build

# Expose the port the app runs on
EXPOSE 8080

# Command to run the Go server
CMD ["./server"]

# Run commands:
# docker build -t example-backend .
# docker run -p 8080:8080 example-backend