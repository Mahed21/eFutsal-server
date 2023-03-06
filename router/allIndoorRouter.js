const express = require("express");
const AllindoorController = require("../controller/allIndoorController");
const router = express.Router();
router
  .route("/")
  .get(AllindoorController.getIndoor)
  .post(AllindoorController.createIndoor);

module.exports = router;
