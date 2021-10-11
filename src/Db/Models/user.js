const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db_conection.js");

class User extends Model {}
User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      defaultValue: new Date(1999, 05, 29),
    },
  },
  {
    sequelize,
    modelName: "user",
    validate: {},
  }
);
module.exports = User;
