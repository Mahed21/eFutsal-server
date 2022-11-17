const mongoose = require("mongoose");
const teamEntrySchema = mongoose.Schema(
  {
    RegisterdteamName: {
      type: String,
      required: true,
      trim: true,
    },
    RegisterdTeamEmail: {
      type: String,
      required: true,
      trim: true,
    },
    RegisterdteamContact: {
      type: String,
      required: true,
      trim: true,
    },
    RegisterdteamAdress: {
      type: String,
      required: true,
      trim: true,
    },
    indoorAdminEmail: {
      type: String,
      required: true,
      trim: true,
    },
    HostindoorName: {
      type: String,
      required: true,
      trim: true,
    },
    TournamnetName: {
      type: String,
      required: true,
      trim: true,
    },
    PlayerNameOne: {
      type: String,
      required: true,
      trim: true,
    },
    PlayerNameTwo: {
      type: String,
      required: true,
      trim: true,
    },
    PlayerNameThree: {
      type: String,
      required: true,
      trim: true,
    },
    PlayerNameFour: {
      type: String,
      required: true,
      trim: true,
    },
    PlayerNameFive: {
      type: String,
      required: true,
      trim: true,
    },
    PlayerNameSix: {
      type: String,
      required: true,
      trim: true,
    },

    PlayerNameSeven: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const TeamEntry = mongoose.model("teamEntry", teamEntrySchema);

module.exports = TeamEntry;
