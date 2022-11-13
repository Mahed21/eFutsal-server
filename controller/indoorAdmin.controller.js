const IndoorAdmin = require("../model/IndoorAdmin");

exports.getIndoorAdmin = async (req, res) => {
  try {
    const indoorAdmin = await IndoorAdmin.find({});
    res.status(200).json({
      status: "success",
      message: "data get Successfully",
      data: indoorAdmin,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to get",
      data: error.message,
    });
  }
};

exports.createIndoorAdmin = async (req, res, mext) => {
  try {
    const indoorAdmin = new IndoorAdmin(req.body);
    const result = await indoorAdmin.save();
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
