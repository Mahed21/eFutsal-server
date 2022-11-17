const TeamEntry = require("../model/teamEntry");

exports.getTeamEntry = async (req, res) => {
  try {
    const team = await TeamEntry.find({});
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
exports.createTeamEntry = async (req, res, next) => {
  try {
    const team = new TeamEntry(req.body);
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
