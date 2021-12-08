const userModel = require("../../module/user");

const getLike = async (req, res) => {
  const user = req.token.userId;

  try {
    const likeproduct = await userModel
      .findOne({ _id: user })
      .populate("LikeCoffe");
    res.status(200).json(likeproduct.LikeCoffe);
    
  } catch (error) {
    res.send(error);
  }
};

const AddLike = async (req, res) => {
  const id = req.params.id;
  const user = req.token.userId;
  try {
    const newLike = await userModel.findOneAndUpdate(
      { _id: user },
      { $push: { LikeCoffe: id } },
      { new: true }
    );
    res.status(201).json(newLike);
  } catch (error) {
    res.send(error);
  }
};
const remoLike = async (req, res) => {
  const id = req.params.id;
  const user = req.token.userId;
  try {
    const newLike = await userModel.findOneAndUpdate(
      { _id: user },
      { $pull: { LikeCoffe: id } },
      { new: true }
    );
    res.status(201).json(newLike)
  } catch (error) {
    res.send(error);
  }
};
module.exports = { AddLike, getLike, remoLike };
