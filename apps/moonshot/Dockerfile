FROM node:8.7.0-alpine

RUN mkdir -p /apps/directory/moonshot

WORKDIR /apps/directory/moonshot

COPY ../../package.json
COPY ../../package-lock.json
RUN npm install

COPY . /apps/directory/moonshot

CMD ["ng", "serve" "moonshot"]
