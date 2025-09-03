# ---- deps stage: install only production deps ----
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev


# ---- runtime stage: copy minimal app + node_modules ----
FROM node:20-alpine AS runtime
ENV NODE_ENV=production
WORKDIR /app
# Copy production node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules
# Copy app source (adjust ignores via .dockerignore if needed)
COPY . .
# Switch to non-root user for security
RUN addgroup -S nodeapp && adduser -S nodeuser -G nodeapp
USER nodeuser
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -qO- http://localhost:3000/health || exit 1
CMD ["node", "server.js"]
