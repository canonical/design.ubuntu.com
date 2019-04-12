FROM ubuntu:xenial

RUN apt-get update && apt-get install --yes nginx

# Set git commit ID
ARG TALISKER_REVISION_ID
RUN test -n "${TALISKER_REVISION_ID}"

# Copy over files
WORKDIR /srv
ADD _site .
ADD nginx.conf /etc/nginx/sites-enabled/default
RUN sed -i "s/~TALISKER_REVISION_ID~/${TALISKER_REVISION_ID}/" /etc/nginx/sites-enabled/default

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]

