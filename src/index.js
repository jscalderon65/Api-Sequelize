const app = require("./server");
const sequelize = require("./Db/db_conection");
app.listen(app.get("port"), () => {
  console.log("server on port: ", app.get("port"));
  sequelize
    .sync()
    .then(() => {
      console.log("DB conectada");
    })
    .catch(() => {
      console.log("No hay conexión con DB");
    });
});
