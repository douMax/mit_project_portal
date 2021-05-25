const router = require("express").Router();
const eoiController = require("../controllers/eoi.controller");

router
  .route("/api/projects/:projectId/eois")
  .post(eoiController.createEOI)
  .get(eoiController.findProjectEOIs);

router.route("/api/projects/eois/:applicantId").get(eoiController.findUserEOIs);

router
  .route("/api/projects/:projectId/eois/:eoiId/eoi")
  .get(eoiController.findOneEOIs)
  .put(eoiController.updateEOI);

module.exports = router;
