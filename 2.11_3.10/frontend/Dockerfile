# --- Stage 1: Build stage ---
FROM node:18-alpine AS builder

WORKDIR /app
    
# Copy only what is needed for installing dependencies
COPY package*.json ./
    
# Use npm ci for clean reproducible installs
RUN npm ci
    
# Copy source files
COPY . .
    
# Build the production bundle
RUN npm run build
    
# --- Stage 2: Serve with Nginx ---
FROM nginx:alpine
    
# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*
    
# Copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html
    
EXPOSE 80