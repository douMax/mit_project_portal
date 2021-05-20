const proxy = require("http-proxy-middleware");
const nodeEnv = process.env.NODE_ENV;

module.exports = function (app) {
  app.use(
    proxy(["/api"], {
      target: "http://localhost:5000",
    })
  );
};
