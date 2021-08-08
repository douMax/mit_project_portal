const router = require('express').Router();

const userAuthController = require('./user.controller');

router.route('/auth/login').post(userAuthController.login);

router.route('/auth/register').post(userAuthController.register);

router.route("/auth/allUsers").get(userAuthController.getAllUsers);

module.exports = router;