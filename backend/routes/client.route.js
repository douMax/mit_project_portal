const router = require("express").Router();
const clientController = require("../controllers/client.controller");

// checkAuth, router,

// router.use(checkAccessLevel, (req, res) => {

// })

router
  .route("/api/clients")
  .get(clientController.findCompanyClients)
  .post(clientController.create);

router
.route("/api/clients/:clientId")
.get(clientController.findOneById)
.put(clientController.update)
.delete(clientController.delete);


router.route("/api/clients/:clientId/projects").get(clientController.findClientsProjects)


module.exports = router;
