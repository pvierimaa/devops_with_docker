# Use Amazon Corretto 8 for Java 8 compatibility
FROM amazoncorretto:8

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy the application code
COPY . .

# Build the project
RUN ./mvnw package

# Expose the port used by the app
EXPOSE 8080

# Run the Spring application
CMD ["java", "-jar", "./target/docker-example-1.1.3.jar"]

# Run commands:
# docker build -t spring-example .
# docker run -p 8080:8080 spring-example