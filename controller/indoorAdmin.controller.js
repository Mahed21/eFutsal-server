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
exports.getDeleteIndoorAdmin = async (req, res, next) => {
  try {
    const { indoorName } = req.params;

    const result = await IndoorAdmin.deleteOne({ indoorName: indoorName });

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
exports.getIndoorAdminUpdateById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await IndoorAdmin.updateOne({ _id: id }, { $set: req.body });
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
