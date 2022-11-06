const express = require("express");
const indoorController = require("../controller/indoor.controller");
const router = express.Router();
router
  .route("/")
  .get(indoorController.getIndoor)
  .post(indoorController.createIndoor);

router.route("/:id").put(indoorController.getIndoorUpdateById);
router.route("/:id").delete(indoorController.getDeleteIndoor);

module.exports = router;
