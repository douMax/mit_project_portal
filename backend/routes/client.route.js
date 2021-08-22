const router = require("express").Router();
const clientController = require("../controllers/client.controller");

router
  .route("/api/clients")
  .get(clientController.findCompanyClients)

router
  .route("/api/auth/client/signup")
  .post(clientController.create);

router
  .route("/api/auth/client")
  .post(clientController.getClient);

router
  .route("/api/clients/:clientId")
  .get(clientController.findOneById)
  .put(clientController.update)
  .delete(clientController.delete);


module.exports = router;
