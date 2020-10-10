FROM node:lts-alpine

ARG APP_BUILD=0
ARG APP_COMMIT=0
ARG APP_CREATED=0

ENV APP_BUILD=${APP_BUILD}
ENV APP_COMMIT=${APP_COMMIT}
ENV APP_CREATED=${APP_CREATED}

WORKDIR /app
COPY ./package.json ./package-lock.json ./
COPY ./dist ./dist
ENV NODE_ENV=production
RUN npm install --production && npm cache clean
CMD ["node", "dist/main.js"]

