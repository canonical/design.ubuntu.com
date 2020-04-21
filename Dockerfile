# syntax=docker/dockerfile:experimental

# Build stage: Install ruby dependencies
# ===
FROM ruby:2.5 AS build-site
WORKDIR /srv
ADD . .
RUN bundle install
RUN bundle exec jekyll build


# Build stage: Install yarn dependencies
# ===
FROM node:12-slim AS yarn-dependencies
WORKDIR /srv
ADD package.json .
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn yarn install


# Build stage: Build JavaScript
# ===
FROM yarn-dependencies AS build-js
ADD . .
RUN yarn run copy-js


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

# Install nginx
RUN apt-get update && apt-get install --no-install-recommends --yes nginx

# Import code, build assets and mirror list
RUN rm -rf package.json yarn.lock .babelrc webpack.config.js Gemfile.lock nginx.conf
COPY --from=build-site srv/_site .
COPY --from=build-css srv/css css
COPY --from=build-js srv/assets assets

ARG BUILD_ID
ADD nginx.conf /etc/nginx/sites-enabled/default
RUN sed -i "s/~BUILD_ID~/${BUILD_ID}/" /etc/nginx/sites-enabled/default

STOPSIGNAL SIGTERM

# Setup commands to run server
CMD ["nginx", "-g", "daemon off;"]
