    # syntax = docker/dockerfile:1.2
    FROM node:14.19.1-alpine as base
    WORKDIR /app
    COPY package.json yarn.lock ./
    RUN yarn
    COPY . /app

    FROM base as build
    WORKDIR /app
    RUN yarn build

    FROM socialengine/nginx-spa as production
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    COPY --from=build /app/public /app
    EXPOSE 80