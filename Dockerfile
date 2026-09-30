FROM node:20-alpine AS assets
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY src ./src
COPY vite.config.js tailwind.config.js postcss.config.cjs ./
RUN npm run build

FROM php:8.3-cli
WORKDIR /app
COPY --from=assets /app/dist ./dist
COPY index.php ./
EXPOSE 10000
CMD ["sh", "-c", "php -S 0.0.0.0:${PORT:-10000} -t /app"]