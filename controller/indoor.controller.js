const Indoor = require("../model/indoor");
exports.getIndoor = async (req, res) => {
  try {
    const indoor = await Indoor.find({});
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
    const indoor = new Indoor(req.body);
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

exports.getIndoorUpdateById = async (req, res, next) => {
  try {
    const { id } = req.params;
    // console.log(id);

    const result = await Indoor.updateOne({ _id: id }, { $set: req.body });
    res.status(200).json({
      status: "success",
      message: "data updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to update",
      data: error.message,
    });
  }
};
//delete
exports.getDeleteIndoor = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Indoor.deleteOne({ _id: id });

    res.status(200).json({
      status: "success",
      message: "data Deleted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to Delete",
      data: error.message,
    });
  }
};
