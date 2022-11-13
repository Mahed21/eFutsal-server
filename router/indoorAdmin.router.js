const express = require("express");
const indoorAdminController = require("../controller/indoorAdmin.controller");
const router = express.Router();
router
  .route("/")
  .get(indoorAdminController.getIndoorAdmin)
  .post(indoorAdminController.createIndoorAdmin);

module.exports = router;
