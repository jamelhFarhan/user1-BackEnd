const mongoose = require("mongoose");

const productModel = new mongoose.Schema({
  name: { type: String },
price: { type: String },
  img: { type: String },
  user:{type: mongoose.Schema.Types.ObjectId, ref:"userModel"}
});

module.exports = mongoose.model("productModel", productModel);
