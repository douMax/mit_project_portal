const proxy = require("http-proxy-middleware");
const nodeEnv = process.env.NODE_ENV;

module.exports = function (app) {
  app.use(
    proxy(["/api"], {
      target:
        nodeEnv === "production"
          ? "https://mit-project-portal.herokuapp.com/"
          : "http://localhost:5000",
    })
  );
};
