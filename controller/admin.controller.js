const Admin = require("../model/admin");
exports.getAdmin = async (req, res) => {
  try {
    const admin = await Admin.find({});

    res.status(200).json({
      status: "success",
      message: "data get Successfully",

      data: admin,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to get",
      data: error.message,
    });
  }
};
