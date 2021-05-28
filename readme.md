# HOW TO START BACK-END?

1. ###### create ".env" file in folder "server" with variables:
   ###### DB_PASSWORD=YOR_PASSWORD_TO_DB
   ###### ADMIN_PASSWORD=YOR_PASSWORD_TO_ADMIN
   ###### PORT=33433
   ###### in development mode:
   ###### sudo docker-compose up -d
   ###### cd server
   ###### npm i
   ###### npm start
   ###### in production mode:
   ###### sudo docker-compose -f docker-compose.prod.yml up -d --build
   ###### cd server
   ###### npm i
   ###### npm run dev

###### Adminer will start on port: 8030.
