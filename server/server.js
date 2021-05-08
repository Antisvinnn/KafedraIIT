import sequelize from "./db/config/connect.mjs";
import app from "./app.mjs";

import logger from "./logs/pino.mjs";
const PORT = 33433;

const server = app.listen(PORT, (err) => {
  if (err) logger.error(err);
  else logger.info(`Server runing on PORT: ${PORT}`);
});
server.setTimeout(3000000);

sequelize
  .authenticate()
  .then(() => {
    logger.info("Connection has been established successfully");
    // TODO: add admin
  })
  .catch((err) => {
    logger.error("Unable to connect to the database:", err);
  });
