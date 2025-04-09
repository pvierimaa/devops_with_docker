# Use Ubuntu 24.04 as the base image
FROM ubuntu:24.04

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install curl
RUN apt-get update && apt-get install -y curl

# Copy the script file into the container
COPY script.sh .

# Ensure the script has execute permissions
RUN chmod +x script.sh

# Run the script when the container starts
CMD ./script.sh
