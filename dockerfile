FROM oven/bun:1.1

WORKDIR /app
COPY . .
COPY .env.docker .env

RUN bun install
RUN bun run build

EXPOSE 3000
CMD ["bun", "start"]