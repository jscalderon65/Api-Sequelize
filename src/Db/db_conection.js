const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:sanpaoli14@localhost:5432/sequelize"
);
module.exports = sequelize;
