const AllIndoor = require("../model/indoor");
exports.getIndoor = async (req, res) => {
  try {
    const indoor = await AllIndoor.find({});
    res.status(200).json({
      status: "success",
      message: "data get Successfully",

      data: indoor,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to get",
      data: error.message,
    });
  }
};

exports.createIndoor = async (req, res, mext) => {
  try {
    const indoor = new AllIndoor(req.body);
    const result = await indoor.save();
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
