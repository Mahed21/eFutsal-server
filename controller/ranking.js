const Ranking = require("../model/ranking");
exports.getRankingInfo = async (req, res) => {
  try {
    const data = await Ranking.find({});
    res.status(200).json({
      status: "success",
      message: "data get Successfully",

      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to get",
      data: error.message,
    });
  }
};

exports.createRanking = async (req, res, next) => {
  try {
    const data = new Ranking(req.body);
    const result = await data.save();
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
