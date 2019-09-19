FROM alpine

RUN apk update && \
  apk add rtorrent nodejs