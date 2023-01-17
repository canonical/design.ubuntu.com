# syntax=docker/dockerfile:experimental


# Build stage: Install python dependencies
# ===
FROM ubuntu:focal AS python-dependencies
RUN apt-get update && apt-get install --no-install-recommends --yes python3-pip python3-setuptools
COPY requirements.txt /tmp/requirements.txt
RUN pip3 config set global.disable-pip-version-check true
RUN --mount=type=cache,target=/root/.cache/pip pip3 install --user --requirement /tmp/requirements.txt


# Build stage: Install yarn dependencies
# ===
FROM node:16 AS yarn-dependencies
WORKDIR /srv
ADD package.json .
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn yarn install


# Build stage: Build JavaScript
# ===
FROM yarn-dependencies AS build-js
WORKDIR /srv
ADD . .
RUN yarn run build-js


# Build stage: Build CSS
# ===
FROM yarn-dependencies AS build-css
WORKDIR /srv
ADD . .
RUN yarn run build-css


# Build the production image
# ===
FROM ubuntu:focal

# Set up environment
ENV LANG C.UTF-8
WORKDIR /srv

# Install python and import python dependencies
RUN apt-get update && apt-get install --no-install-recommends --yes python3 python3-setuptools python3-lib2to3 python3-pkg-resources
ENV PATH="/root/.local/bin:${PATH}"

# Copy python dependencies
COPY --from=python-dependencies /root/.local/lib/python3.8/site-packages /root/.local/lib/python3.8/site-packages
COPY --from=python-dependencies /root/.local/bin /root/.local/bin

# Import code, build static
COPY . .
RUN rm -rf package.json yarn.lock .babelrc webpack.config.js
COPY --from=build-css srv/static/css static/css
COPY --from=build-js srv/static/js/* static/js/

# Set build ID
ARG BUILD_ID
ENV TALISKER_REVISION_ID "${BUILD_ID}"

# Setup commands to run server
ENTRYPOINT ["./entrypoint"]
CMD ["0.0.0.0:80"]
