const router = require("express").Router();
const departmentController = require("../controllers/department.controller");

router
  .route("/api/departments")
  .get(departmentController.findDepartments)
  .post(departmentController.create);

// router.route("/api/departments/2sdfjl49g").get(departmentController.findOneById)

module.exports = router;
