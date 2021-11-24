FROM node:14-alpine3.14 
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install react-scripts@1.1.0 -g
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]