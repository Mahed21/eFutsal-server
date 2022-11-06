const mongoose = require("mongoose");
const teamSchema = mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
      trim: true,
    },

    day: {
      type: String,
      required: true,
      trim: true,
    },
    time: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
    venue: {
      type: String,
      required: true,
      trim: true,
    },

    contact: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    oponant: {
      type: String,
      default: "",
      trim: true,
    },
    opponantContact: {
      type: String,
      default: "",
      trim: true,
    },
    challange: {
      type: String,
      default: "pending",
      trim: true,
    },
  },
  { timestamps: true }
);

const Team = mongoose.model("team", teamSchema);

module.exports = Team;
