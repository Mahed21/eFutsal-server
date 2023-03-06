const mongoose = require("mongoose");
const indoorSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
      trim: true,
    },
    indoorName: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Indoor = mongoose.model("indoor", indoorSchema);

module.exports = Indoor;
