const sequelize = require("../db_conection.js");
/**
 * Reset database and exit
 */
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Reset tables successfully");
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
