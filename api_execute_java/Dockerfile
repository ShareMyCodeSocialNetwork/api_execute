FROM node
WORKDIR /usr/src/app
COPY package*.json ./
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive &&\
    apt-get -y install default-jdk &&\
    apt-get -y install openjdk-11-jdk &&\
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
RUN npm install
COPY . .
EXPOSE 3002
CMD ["npm","start"]