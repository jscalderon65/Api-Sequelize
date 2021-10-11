const serverMiddlewares = {
  redirectRoute: function (req, res, next) {
    res.redirect("/api/db");
    /*     console.log(req.originalUrl); */
    next();
  },
  restrictedRoutes: ["/", "/api"],
};
module.exports = serverMiddlewares;
