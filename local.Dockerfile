FROM node:lts-alpine

WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm install
ENV NODE_TLS_REJECT_UNAUTHORIZED 0
COPY . .
CMD ["npm", "run", "start:dev"]

