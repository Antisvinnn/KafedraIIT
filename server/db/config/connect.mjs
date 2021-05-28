import Sequelize from "sequelize";
import Config from "./config.mjs";
import dotenv from "dotenv";

dotenv.config();
const config = Config[process.env.NODE_ENV || "development"];

const sequelize = new Sequelize(
  config.database,
  config.username,
  process.env.POSTGRES_PASSWORD,
  {
    host: config.host,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export default sequelize;
