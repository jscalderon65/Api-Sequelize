const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db_conection.js");
class Post extends Model {}
Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
  },
  {
    sequelize,
    modelName: "post",
    validate: {},
  }
);
module.exports = Post;
