#!/bin/bash

# Check that two arguments are provided
if [ "$#" -ne 2 ]; then
  echo "Usage: ./builder.sh <github_repo> <dockerhub_repo>"
  echo "Example: ./builder.sh pvierimaa/express-app pvierimaa/testing"
  exit 1
fi

# Arguments
GITHUB_REPO=$1
DOCKERHUB_REPO=$2

# Temporary directory for cloning
TMP_DIR=$(mktemp -d)

# Clone the repository
echo "Cloning https://github.com/$GITHUB_REPO into $TMP_DIR..."
git clone "https://github.com/$GITHUB_REPO.git" "$TMP_DIR"

# Change to the cloned directory
cd "$TMP_DIR" || exit

# Build Docker image
echo "Building Docker image $DOCKERHUB_REPO..."
docker build -t "$DOCKERHUB_REPO" .

# Push image to Docker Hub
echo "Pushing image to Docker Hub: $DOCKERHUB_REPO"
docker push "$DOCKERHUB_REPO"

# Cleanup
echo "Cleaning up..."
rm -rf "$TMP_DIR"

echo "✅ Done!"
