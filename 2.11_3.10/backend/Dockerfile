# --- Stage 1: Build & install dependencies ---
FROM node:18-alpine AS build-stage

WORKDIR /app
    
# Copy only package.json and lockfile for better caching
COPY package*.json ./
    
# Install dependencies without optional packages or dev dependencies
RUN npm ci --omit=optional
    
# Copy app source
COPY . .
    
# --- Stage 2: Run in minimal image ---
FROM node:18-alpine
    
WORKDIR /app
    
# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
    
# Copy only what is needed from build stage
COPY --from=build-stage /app .
    
# Use non-root user
USER appuser
    
EXPOSE 3000
    
CMD ["npm", "start"]
    
