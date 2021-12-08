const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOURL||"mongodb://localhost:27017/Project").then(
  () => {
    console.log("DB connected");
  },
  (err) => {
    console.log(err);
  }
);
