#!/bin/bash

# Exit on any error
set -e

# Check input
if [ "$#" -ne 2 ]; then
  echo "Usage: builder.sh <github_repo> <dockerhub_repo>"
  exit 1
fi

GITHUB_REPO=$1
DOCKERHUB_REPO=$2

# Clone repo
TMP_DIR=$(mktemp -d)
echo "Cloning https://github.com/$GITHUB_REPO into $TMP_DIR..."
git clone "https://github.com/$GITHUB_REPO.git" "$TMP_DIR"

cd "$TMP_DIR" || exit 1

# Docker login
echo "Logging into Docker Hub as $DOCKER_USER..."
echo "$DOCKER_PWD" | docker login -u "$DOCKER_USER" --password-stdin

# Build image
echo "Building Docker image $DOCKERHUB_REPO..."
docker build -t "$DOCKERHUB_REPO" .

# Push image
echo "Pushing image $DOCKERHUB_REPO..."
docker push "$DOCKERHUB_REPO"

# Cleanup
echo "Cleaning up..."
rm -rf "$TMP_DIR"

echo "✅ Done"
