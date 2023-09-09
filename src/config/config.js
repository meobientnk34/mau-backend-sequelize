require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: "123456",
    database: "haimao",
    host: "localhost",
    port: "3306",
    dialect: "mysql",
    logging: false,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "172.20.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
