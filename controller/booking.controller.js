const Booking = require("../model/booking");
exports.getBooking = async (req, res) => {
  try {
    const booking = await Booking.find({});
    res.status(200).json({
      status: "success",
      message: "data get Successfully",

      data: booking,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to get",
      data: error.message,
    });
  }
};
//get by id
exports.getBookingById = async (req, res, next) => {
  const id = req.params.id;

  try {
    const booking = await Booking.find({ _id: id });
    res.status(200).json({
      status: "success",
      message: "data get Successfully",
      data: booking,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to get",
      data: error.message,
    });
  }
};
//save booking details
exports.createBooking = async (req, res, next) => {
  try {
    const booking = new Booking(req.body);
    const result = await booking.save();
    res.status(200).json({
      status: "success",
      message: "data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to get",
      data: error.message,
    });
  }
};

//booking get by date

exports.getBookingByDate = async (req, res, next) => {
  const reqDate = req.params.date;
  try {
    const booking = await Booking.find({ date: reqDate });
    res.status(200).json({
      status: "success",
      message: "data get Successfully",
      data: booking,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to get",
      data: error.message,
    });
  }
};
