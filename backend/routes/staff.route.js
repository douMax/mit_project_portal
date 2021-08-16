const router = require("express").Router();
const staffController = require("../controllers/staff.controller");

// checkAuth, router,

// router.use(checkAccessLevel, (req, res) => {

// })

router
  .route("/api/staff")
  .get(staffController.findStaff);

router
  .route("/api/auth/staff/signup")
  .post(staffController.create);

router
  .route("/api/staffs/:id")
  .get(staffController.findOneById)
  .put(staffController.update)
  .delete(staffController.delete);

router.route("/api/staffs/:id/topics").get(staffController.findStaffTopics);

module.exports = router;
