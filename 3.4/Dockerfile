FROM docker:24.0.9-cli

WORKDIR /usr/src/app

# Install git and bash
RUN apk add --no-cache git bash

# Copy the script into the container
COPY builder.sh .
RUN chmod +x builder.sh

# Use ENTRYPOINT to accept arguments
ENTRYPOINT ["./builder.sh"]
