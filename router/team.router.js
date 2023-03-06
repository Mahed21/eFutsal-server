const express = require("express");
const TeamController = require("../controller/team.controller");
const router = express.Router();
router.route("/").get(TeamController.getTeam).post(TeamController.createTeam);

module.exports = router;
