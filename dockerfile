FROM oven/bun:1.3.14-alpine AS builder
WORKDIR /build

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --prod

COPY . .
RUN bun run build

FROM oven/bun:1.3.14-alpine AS runner
WORKDIR /app
COPY --from=builder /build/.output ./
CMD ["bun", "run", "server/index.mjs"]