FROM node:20-alpine

WORKDIR /usr/app

RUN apk add --no-cache bash

COPY package*.json ./

COPY . .

EXPOSE  3000

COPY .docker/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]