const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  LikeCoffe:  [{type: mongoose.Schema.Types.ObjectId, ref: "productModel"}] ,
});

module.exports = mongoose.model("userModel", userModel);
