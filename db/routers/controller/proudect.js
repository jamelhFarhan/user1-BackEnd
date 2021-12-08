const proudectModel = require("../../module/product");

const getProduct = async (req, res) => {
  try {
    const product = await proudectModel.find({});
    res.status(200).json(product);
  } catch (error) {
    res.send(error);
  }
};
const addProduct = async (req, res) => {
  const { name, price, img } = req.body;
  const user = req.token.userId;

  const newProduct = new proudectModel({ name, price, img, user });

  try {
    const addPro = await newProduct.save();

    res.status(201).json(addPro);
  } catch (error) {
    res.send(error);
  }
};

// const postCourse = async (req, res) => {
//   const { newName, newDescription, newImg } = req.body;
//   const user = req.token.userId;
//   const newCourse = new courseModel({
//     name: newName,
//     description: newDescription,
//     img: newImg,
//     user,
//   });
//   try {
//     const savedCourse = await newCourse.save();
//     const courses = await courseModel.find({});
//     res.status(200).json(courses);
//   } catch (error) {
//     res.send(error);
//   }
// };
const deletProduct = async (req, res) => {
  const id = req.params.id;
  const user = req.token.userId;
  try {
    const del = await proudectModel.findOneAndDelete({ _id: id, user: user });

    res.status(201).json([del, "delete"]);
  } catch (error) {
    res.send(error);
  }
};

// const getProductID = async (req, res) => {
//   const { id } = req.params;
//   const user = req.token.userId;
//   res.send("hello")

//   try {
//     const product = await proudectModel.findOne({ _id: id }).populate("user");
//     res.status(201).json(product);
//   } catch (error) {
//     res.send(error,"err");
//   }
// }
module.exports = { getProduct, addProduct, deletProduct};
