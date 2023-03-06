const mongoose = require("mongoose");
const teamSchema = mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
      trim: true,
    },

    availableDay: {
      type: String,
      required: true,
      trim: true,
    },

    contact: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Team = mongoose.model("team", teamSchema);

module.exports = Team;
