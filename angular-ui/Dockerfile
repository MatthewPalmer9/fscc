FROM node:14-alpine3.14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install

COPY . .
EXPOSE 4200

CMD [ "ng", "serve", "--port", "4200", "--host", "0.0.0.0", "--disable-host-check"]

