export default {
  development: {
    username: "postgres",
    database: "postgres",
    host: "0.0.0.0",
    dialect: "postgres",
    operatorsAliases: false,
  },
  production: {
    username: "postgres",
    database: "postgres",
    host: "db",
    dialect: "postgres",
    operatorsAliases: false,
  },
};
