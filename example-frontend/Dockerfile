# --- Stage 1: Build stage ---
FROM node:16-alpine AS build-stage

WORKDIR /usr/src/app
    
# Set environment variable for backend API URL
ENV REACT_APP_BACKEND_URL=http://localhost/api
    
# Copy the source code into the container
COPY . .
    
# Install dependencies and build the React app
RUN npm install && npm run build
    
# --- Stage 2: Production image ---
FROM node:16-alpine
    
WORKDIR /usr/src/app
    
# Install serve to serve static files
RUN npm install -g serve && adduser -D appuser
    
# Copy the build folder from the builder stage
COPY --from=build-stage /usr/src/app/build ./build
    
# Change ownership of the build folder
RUN chown -R appuser ./build

# Switch to a non-root user
USER appuser

# Expose the port that the app will run on
EXPOSE 5000
    
# Serve the static files with serve
CMD ["serve", "-s", "build", "-l", "5000"]

# Run commands:
# docker build -t example-frontend .
# Go to the root of the project:
# docker compose up