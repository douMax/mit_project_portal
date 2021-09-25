const router = require("express").Router();
const staffController = require("../controllers/staff.controller");

router
  .route("/api/staff")
  .get(staffController.findStaff);

router
  .route("/api/auth/staff/signup")
  .post(staffController.create);

router
  .route("/api/auth/staff")
  .post(staffController.getStaff);

router
  .route("/api/staffs/:id")
  .get(staffController.findOneById)
  .put(staffController.update)
  .delete(staffController.delete);

router.route("/api/staffs/:id/topics").get(staffController.findStaffTopics);

module.exports = router;
