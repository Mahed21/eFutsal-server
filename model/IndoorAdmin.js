const mongoose = require("mongoose");
const indoorAdminSchema = mongoose.Schema(
  {
    indoorName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    tournamentName: {
      type: String,
      default: "",
    },
    tournamnetStart: {
      type: String,
      default: "",
    },
    tournamnetfee: {
      type: String,
      default: "",
    },
    tournamentBanner: {
      type: String,
      default: "",
    },
    tournamentRulesOne: {
      type: String,
      default: "",
    },
    tournamentRulesTwo: {
      type: String,
      default: "",
    },
    tournamentRulesThree: {
      type: String,
      default: "",
    },
    tournamentRulesFour: {
      type: String,
      default: "",
    },
    tournamentRulesFive: {
      type: String,
      default: "",
    },
    tournamentRulesSix: {
      type: String,
      default: "",
    },
    tournamentFirstPrize: {
      type: Number,
      default: "",
    },
    tournamentSecondPrize: {
      type: Number,
      default: "",
    },
    tournamentStatus: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const IndoorAdmin = mongoose.model("indoorAdmin", indoorAdminSchema);

module.exports = IndoorAdmin;
