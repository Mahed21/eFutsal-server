const express = require("express");
const TeamEntryController = require("../controller/teamEntryController");
const router = express.Router();
router
  .route("/")
  .get(TeamEntryController.getTeamEntry)
  .post(TeamEntryController.createTeamEntry);

module.exports = router;
