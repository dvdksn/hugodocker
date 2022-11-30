# syntax=docker/dockerfile:1

FROM golang:1.19.3-alpine as base
WORKDIR /src
RUN apk add --update nodejs npm git

FROM base as node
COPY package*.json .
RUN npm install

FROM base as hugo
RUN go install github.com/gohugoio/hugo@v0.105.0

#FROM base as dartsass
#ARG BUILDARCH
#ARG VERSION="1.56.1"
#ARG BASEURL="https://github.com/sass/dart-sass-embedded/releases/download"
#RUN ARCH=$(case $BUILDARCH in \
#  "amd64")   echo "x64"   ;; \
#  "arm64")   echo "arm64" ;; \
#  *)         echo ""      ;; esac) && \
#  wget -c ${BASEURL}/${VERSION}/sass_embedded-${VERSION}-linux-${ARCH}.tar.gz && \
#  tar -xf sass_embedded-${VERSION}-linux-${ARCH}.tar.gz

FROM base as final
COPY --from=hugo /go/bin/hugo /usr/local/bin/hugo
COPY --from=node /src/node_modules /src/node_modules
# COPY --from=dartsass /src/sass_embedded/ /usr/local/bin/
RUN --mount=type=bind,target=.
