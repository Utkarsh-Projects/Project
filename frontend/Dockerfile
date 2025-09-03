# ---- build stage: compile React app ----
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# For Create React App / Vite; ensure build script exists
RUN npm run build

# ---- serve stage: nginx serves static + reverse-proxy to API ----
FROM nginx:1.27-alpine AS serve

# Copy build artifacts to Nginx web root
COPY --from=build /app/build /usr/share/nginx/html

# Custom nginx config that serves SPA and proxies /api
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -qO- http://localhost/health || exit 1
