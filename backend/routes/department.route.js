const router = require("express").Router();
const departmentController = require("../controllers/department.controller");

// checkAuth, router,

// router.use(checkAccessLevel, (req, res) => {

// })

router
  .route("/api/departments")
  .get(departmentController.findDepartments)
  .post(departmentController.create);

module.exports = router;
