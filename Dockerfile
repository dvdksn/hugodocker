# syntax=docker/dockerfile:1

# Using Debian as base due to glibc dependencies in dartsass
FROM golang:1.19.3-bullseye as base
WORKDIR /src

FROM base as hugo
RUN go install github.com/gohugoio/hugo@v0.105.0

FROM base as dartsass
ARG BUILDARCH
ARG VERSION="1.56.1"
ARG BASEURL="https://github.com/sass/dart-sass-embedded/releases/download"
RUN ARCH=$(case $BUILDARCH in \
  "amd64")   echo "x64"   ;; \
  "arm64")   echo "arm64" ;; \
  *)         echo ""      ;; esac) && \
  wget -c ${BASEURL}/${VERSION}/sass_embedded-${VERSION}-linux-${ARCH}.tar.gz && \
  tar -xf sass_embedded-${VERSION}-linux-${ARCH}.tar.gz

FROM base as final
COPY --from=hugo /go/bin/hugo /usr/local/bin/hugo
COPY --from=dartsass /src/sass_embedded/ /usr/local/bin/
RUN --mount=type=bind,target=.
