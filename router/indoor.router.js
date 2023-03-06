const express = require("express");
const indoorController = require("../controller/indoor.controller");
const router = express.Router();
router
  .route("/")
  .get(indoorController.getIndoor)
  .post(indoorController.createIndoor);

module.exports = router;
