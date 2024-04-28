FROM node:lts-alpine3.19

LABEL version="0.0.1"
LABEL description="This is a discord.js v14 container sample"

USER root

WORKDIR /home/bot

COPY . ./

RUN npm install

CMD ["npm", "run", "start:slash"]
