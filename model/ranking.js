const mongoose = require("mongoose");
const RankingSchema = mongoose.Schema(
  {
    playerEmail: {
      type: String,
      required: true,
      trim: true,
    },
    playerName: {
      type: String,
      required: true,
      trim: true,
    },
    totalMatch: {
      type: Number,
      required: true,
      trim: true,
    },

    score: {
      type: Number,
      required: true,
      trim: true,
    },
    indoorNameForRanking: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Ranking = mongoose.model("ranking", RankingSchema);

module.exports = Ranking;
