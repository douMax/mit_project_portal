const router = require("express").Router();
const staffController = require("../controllers/staff.controller");

// checkAuth, router,

// router.use(checkAccessLevel, (req, res) => {

// })

router
  .route("/api/staff")
  .get(staffController.findStaff)
  .post(staffController.create);

module.exports = router;
