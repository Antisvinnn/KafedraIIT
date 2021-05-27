import sequelize from "./db/config/connect.mjs";
import { create } from "./services/UserService.mjs";
import app from "./app.mjs";
import dotenv from "dotenv";
import logger from "./logs/pino.mjs";

dotenv.config();

const PORT = process.env.NODE_ENV === "development" ? 33433 : process.env.PORT;
const password = process.env.ADMIN_PASSWORD;

const server = app.listen(PORT, (err) => {
  if (err) logger.error(err);
  else logger.info(`Server runing on PORT: ${PORT}`);
});
server.setTimeout(3000000);

try {
  await sequelize.authenticate();
  logger.info("Connection has been established successfully");
  create({
    name: "Admin",
    description: "admin",
    login: "admin",
    role: "admin",
    password,
  });
} catch (error) {
  logger.error("Unable to connect to the database:", error);
}
