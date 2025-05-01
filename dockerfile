# Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN bun install
RUN bun run build
EXPOSE 3000
CMD ["bun", "run", "start"]