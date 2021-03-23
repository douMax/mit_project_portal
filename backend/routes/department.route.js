const router = require("express").Router();
const departmentController = require("../controllers/department.controller");

router
  .route("/api/departments")
  .get(departmentController.findDepartments)
  .post(departmentController.create);

router
  .route("/api/departments/:departmentId")
  .get(departmentController.findOneById)
  .put(departmentController.update)
  .delete(departmentController.delete);
// /projects/:projectId

module.exports = router;
