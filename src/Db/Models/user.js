const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../db_conection.js");

class User extends Model {}
User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El nombre no puede ser nulo",
        },
        isAlpha: {
          args: true,
          msg: "El nombre, solo puede contener caracteres alfa numéricos",
        },
        len: {
          args: [3, 255],
          msg: "El nombre,  no puede ser menor a 3 caracteres ni mayor a 255 caracteres",
        },
      },
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: 22,
      validate: {
        isInt: {
          args: true,
          msg: "La edad debe ser un número ",
        },
        min: {
          args: 18,
          msg: "La edad debe ser mayor o igual a 18",
        },
        max: {
          args: 99,
          msg: "La edad tiene que ser menor o igual a 99",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "El email, debe ser un corro válido.",
        },
        defaultValue: "aux@aux.com",
      },
    },
    isAdmin: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    sequelize,
    modelName: "user",
    validate: {},
  }
);
module.exports = User;
