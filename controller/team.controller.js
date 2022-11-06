const Team = require("../model/team");
exports.getTeam = async (req, res) => {
  try {
    const team = await Team.find({});
    res.status(200).json({
      status: "success",
      message: "data get Successfully",
      data: team,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to get",
      data: error.message,
    });
  }
};

exports.createTeam = async (req, res, next) => {
  try {
    const team = new Team(req.body);
    const result = await team.save();
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

exports.getUpdateTeam = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Team.updateOne({ _id: id }, { $set: req.body });
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
