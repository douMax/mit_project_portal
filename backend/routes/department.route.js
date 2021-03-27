const router = require("express").Router();
const departmentController = require("../controllers/department.controller");

// checkAuth, router,

// router.use(checkAccessLevel, (req, res) => {

// })

router
  .route("/api/departments")
  .get(departmentController.findDepartments)
  .post(departmentController.create);

// /api/departments/:id

router
  .route("/api/departments/:id")
  .get(departmentController.findOneById)
  .put(departmentController.update)
  .delete(departmentController.delete);
// /projects/:projectId
module.exports = router;
