const mongoose = require("mongoose");
const allIndoorSchema = mongoose.Schema(
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

const AllIndoor = mongoose.model("allIndoor", allIndoorSchema);

module.exports = AllIndoor;
