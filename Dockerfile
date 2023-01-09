# syntax=docker/dockerfile:1

FROM golang:1.19.3-alpine as base
WORKDIR /src
RUN apk add --update nodejs npm git

FROM base as node
COPY package*.json .
RUN npm install

FROM base as hugo
RUN go install github.com/gohugoio/hugo@v0.109.0

FROM base as final
COPY --from=hugo /go/bin/hugo /usr/local/bin/hugo
COPY --from=node /src/node_modules /src/node_modules
RUN --mount=type=bind,target=.,rw
