const router = require("express").Router();
const application_recordsController = require("../controllers/application_records.controller");
const { route } = require("./department.route");

// checkAuth, router,

// router.use(checkAccessLevel, (req, res) => {

// })

router
  .route("/api/application_records")
  .get(application_recordsController.findapplication_records)
  .post(application_recordsController.create);

router
  .route("/api/application_records/:application_recordsId")
  .get(application_recordsController.findOneById)
  
  .put(application_recordsController.update)
  .delete(application_recordsController.delete);
  
  

module.exports = router;
