FROM node:8.7.0-alpine

RUN mkdir -p /app/directory/api

WORKDIR /app/directory/api

COPY package.json
COPY package-lock.json
RUN npm install

COPY . /app/directory/api

CMD ["ng", "build" "api"]
