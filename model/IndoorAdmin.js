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
  },
  { timestamps: true }
);

const IndoorAdmin = mongoose.model("indoorAdmin", indoorAdminSchema);

module.exports = IndoorAdmin;
