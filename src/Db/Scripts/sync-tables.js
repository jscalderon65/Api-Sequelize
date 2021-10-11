const sequelize = require("../db_conection.js");
/**
 * Sync database and exit
 */
sequelize
  .sync()
  .then(() => {
    console.log("Reset tables successfully");
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
