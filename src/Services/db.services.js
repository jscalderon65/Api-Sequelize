const sequelize = require("../Db/db_conection.js");
const isConected = (req, res) => {
  sequelize
    .authenticate()
    .then(() => {
      res.send("DB conectada");
    })
    .catch(() => {
      res.send("No hay conexión con DB");
    });
};

module.exports = {
  isConected,
};
