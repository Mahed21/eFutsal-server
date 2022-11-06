const express = require("express");
const TeamController = require("../controller/team.controller");
const router = express.Router();
router.route("/").get(TeamController.getTeam).post(TeamController.createTeam);

router.route("/:id").put(TeamController.getUpdateTeam);

module.exports = router;
