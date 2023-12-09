FROM node:21-alpine

RUN apk update && apk upgrade && apk add git
