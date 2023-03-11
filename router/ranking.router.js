const express = require("express");
const RankingController = require("../controller/ranking");
const router = express.Router();
router
  .route("/")
  .get(RankingController.getRankingInfo)
  .post(RankingController.createRanking);

module.exports = router;
