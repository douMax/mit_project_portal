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
// /api/staff/:id

router
  .route("/api/staffs/:id")
  .get(staffController.findOneById)
  .put(staffController.update)
  .delete(staffController.delete);

router.route("/api/staffs/:id/topics").get(staffController.findStaffTopics);

module.exports = router;
