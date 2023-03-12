const express = require("express");
const RankingController = require("../controller/ranking");
const router = express.Router();
router
  .route("/")
  .get(RankingController.getRankingInfo)
  .post(RankingController.createRanking);
router.route("/:id").put(RankingController.UpdateRankingById);

module.exports = router;
