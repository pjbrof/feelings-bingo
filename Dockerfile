FROM node:10

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

COPY . .

COPY ./public ./public

EXPOSE 3000

CMD ["npm", "start"]
