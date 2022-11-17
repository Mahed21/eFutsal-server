const express = require("express");
const indoorAdminController = require("../controller/indoorAdmin.controller");
const router = express.Router();
router
  .route("/")
  .get(indoorAdminController.getIndoorAdmin)
  .post(indoorAdminController.createIndoorAdmin);
router.route("/:indoorName").delete(indoorAdminController.getDeleteIndoorAdmin);
router.route("/:id").put(indoorAdminController.getIndoorAdminUpdateById);

module.exports = router;
