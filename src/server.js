const express = require("express");
const cors = require("cors");
const app = express();
const {
  redirectRoute,
  restrictedRoutes,
} = require("./Middlewares/Server.middlewares.js");
const PORT = process.env.PORT || 3000;

app.set("port", PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/db", require("./Routes/db.routes.js"));
app.use("/api/user", require("./Routes/user.routes.js"));
app.use("/api/post", require("./Routes/post.routes.js"));
app.use(restrictedRoutes, redirectRoute);

module.exports = app;
