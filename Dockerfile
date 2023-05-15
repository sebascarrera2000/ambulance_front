FROM node:18-alpine3.16

WORKDIR /usr/src/

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD npm run preview
