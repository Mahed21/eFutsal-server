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
  },
  { timestamps: true }
);

const TeamEntry = mongoose.model("teamEntry", teamEntrySchema);

module.exports = TeamEntry;
