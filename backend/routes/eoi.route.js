const router = require("express").Router();
const eoiController = require("../controllers/eoi.controller");

router
  .route("/api/eoi/:project_id")
  .get(eoiController.findProjectEOIs);

router
  .route("/api/eoi")
  .post(eoiController.createEOI)

router.route("/api/eois/:id").get(eoiController.findUserEOIs);

router
  .route("/api/eoi/:eoi_id")
  .get(eoiController.findOneEOIs)
  .put(eoiController.updateEOI);

module.exports = router;
