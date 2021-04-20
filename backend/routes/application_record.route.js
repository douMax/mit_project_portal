const router = require("express").Router();
const applicationRecordsContoller = require("../controllers/application_record.controller");

router
  .route("/api/applications")
  .get(applicationRecordsContoller.findApplicationRecords)
  .post(applicationRecordsContoller.create);

router
  .route("/api/applications/:applicationId")
  .get(applicationRecordsContoller.findById);

module.exports = router;
