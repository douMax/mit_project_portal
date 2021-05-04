//Test Authentication Routes
const router = require("express").Router();
const testAuthController = require("./testauth.controller");
const verifyToken = require("./testverifytoken");

router.route("/register").post(testAuthController.create);

router.route("/login").post(testAuthController.login);

router.get("/findall", verifyToken, testAuthController.findAll);

module.exports = router;
