FROM node:lts-alpine as build

WORKDIR /app

COPY src src
COPY package.json yarn.lock tsconfig.json ./

RUN apk add git

RUN yarn install
RUN yarn build

FROM node:lts-alpine

WORKDIR /app

RUN apk add ffmpeg git

COPY package.json yarn.lock ./
COPY settings.example.yaml ./settings.yaml
COPY data data
COPY locales locales
COPY --from=build /app/dist ./dist

RUN yarn install --production

CMD yarn start
