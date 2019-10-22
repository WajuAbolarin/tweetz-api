const Sequelize = require("sequelize");

let DB_PATH =
  process.env.NODE_ENV === "test"
    ? "src/db/db.test.sqlite"
    : "src/db/db.sqlite";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: DB_PATH
});
module.exports = sequelize;
