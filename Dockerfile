# syntax=docker/dockerfile:experimental

# Build stage: Install yarn dependencies
# ===
FROM node:16 AS yarn-dependencies
WORKDIR /srv
ADD package.json .
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn yarn install


# Build stage: Build JavaScript
# ===
FROM yarn-dependencies AS build-js
ADD . .
RUN yarn run build-js


# Build stage: Build CSS
# ===
FROM yarn-dependencies AS build-css
ADD . .
RUN yarn run build-css


# Build the production image
# ===
FROM ubuntu:focal

# Set up environment
ENV LANG C.UTF-8
WORKDIR /srv

# Import code, build assets and mirror list
RUN rm -rf package.json yarn.lock .babelrc webpack.config.js
COPY --from=build-css srv/css css
COPY --from=build-js srv/assets assets

ARG BUILD_ID

STOPSIGNAL SIGTERM

# Set revision ID
ARG BUILD_ID
ENV TALISKER_REVISION_ID "${BUILD_ID}"

# Setup commands to run server
ENTRYPOINT ["./entrypoint"]
CMD ["0.0.0.0:80"]
