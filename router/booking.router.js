const express = require("express");
const bookingController = require("../controller/booking.controller");
const router = express.Router();
router
  .route("/")
  .get(bookingController.getBooking)
  .post(bookingController.createBooking);

router.route("/date/:date").get(bookingController.getBookingByDate);
router.route("/:id").get(bookingController.getBookingById);

module.exports = router;
