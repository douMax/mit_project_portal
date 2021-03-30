const router = require("express").Router();
const groupController = require("../controllers/group.controller");

router
  .route("/api/group")
  .get(groupController.findGroups)
  .post(groupController.create);

router
  .route("/api/group/:groupId")
  .get(groupController.findById)
  .put(groupController.update)
  .delete(groupController.delete);

module.exports = router;
