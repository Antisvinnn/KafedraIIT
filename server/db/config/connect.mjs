import Sequelize from "sequelize";
import Config from "./config.mjs";

const config = Config[process.env.NODE_ENV || "development"];
console.log(process.env.DB_PASSWORD);

const sequelize = new Sequelize(
  config.database,
  config.username,
  process.env.NODE_ENV === "development"
    ? config.password
    : process.env.DB_PASSWORD,
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
