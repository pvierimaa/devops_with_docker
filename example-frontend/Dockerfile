# Use the official Node.js image (LTS version 16.x)
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the application code
COPY . .

# Set environment variable
ENV REACT_APP_BACKEND_URL=http://localhost:8080

# Install the dependencies
RUN npm install

# Build the static files for production
RUN npm run build

# Install the serve package globally to serve static files
RUN npm install -g serve

# Expose port 5000
EXPOSE 5000

# Serve the application using the build folder and listen on port 5000
CMD ["serve", "-s", "build", "-l", "5000"]

# Run commands:
# docker build -t example-frontend .
# docker run -p 5000:5000 example-frontend