FROM node:18-alpine

WORKDIR /usr/src/feelingsbingo

COPY ./package*.json ./

RUN npm ci

COPY . .

EXPOSE 3002

CMD ["npm", "start"]
