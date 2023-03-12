const Ranking = require("../model/ranking");
exports.getRankingInfo = async (req, res) => {
  try {
    const data = await Ranking.find({}).sort({ score: -1 });
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

exports.UpdateRankingById = async (req, res, next) => {
  try {
    const { id } = req.params;
    // console.log(id);

    const result = await Ranking.updateOne({ _id: id }, { $set: req.body });
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
