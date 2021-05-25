FROM node:16.1.0

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN ["npm", "install", "-g,", "npm@7.14.0"]

RUN npm install 

COPY . .

EXPOSE 33433

RUN ["apt-get" , "update"]


CMD ["npm" , "run" , "build"]