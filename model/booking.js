const mongoose = require("mongoose");
const bookingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name required"],
      trim: true,
      maxnLength: [100, "maximum should have 100 letter"],
    },

    time: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    venue: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("booking", bookingSchema);

module.exports = Booking;
