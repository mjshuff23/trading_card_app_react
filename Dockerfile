# Using Ubuntu as our base image
FROM ubuntu:latest

# Needed to bypass interactive installation
ENV DEBIAN_FRONTEND=nonintercative

# Install packages on the base image
RUN apt-get update && apt-get install -y \
    nano \
    vim \
    curl \
    nodejs \
    npm \
    build-essential \
    zlib1g-dev \
    libncurses5-dev \
    libgdbm-dev \
    libnss3-dev \
    libssl-dev \
    libreadline-dev \
    libffi-dev wget && npm install -g yarn

WORKDIR /code

COPY ./package.json /code/package.json

RUN npm install

COPY . /code

EXPOSE 3000

CMD ["npm", "start"]