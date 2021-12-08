const express = require("express");
const Routeproudect = express.Router();
const {
  // othmanGet
  addProduct,
  getProduct,
  deletProduct,
  // getProductID
} = require("../controller/proudect");
const { authentication } = require("../midlware/authentication");
Routeproudect.post("/addProduct", authentication, addProduct);
Routeproudect.get("/getaddProduct", authentication, getProduct);

Routeproudect.delete("/deletProduct/:id", authentication, deletProduct);
// Routeproudect.get("/gg/:id", (req,res)=>{
//   res.send("ggf")


module.exports =  Routeproudect
