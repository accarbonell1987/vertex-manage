# # Dockerfile
# FROM node:20-alpine
# WORKDIR /app
# COPY . .
# RUN bun install
# RUN bun run build
# EXPOSE 3000
# CMD ["bun", "run", "start"]

# Etapa 1: build
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa 2: producción
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "start"]