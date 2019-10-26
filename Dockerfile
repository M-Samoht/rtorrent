FROM alpine

RUN apk update && \
  apk add rtorrent nodejs

COPY ./startup.js /startup.js
COPY ./startup.sh /startup.sh
CMD ['/startup.sh']