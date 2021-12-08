const express = require("express");
const likeFavRoute = express.Router();

const { AddLike,getLike,remoLike } = require("../controller/like");
const {authentication}=require("../midlware/authentication")
likeFavRoute.delete("/unlike/:id",authentication, remoLike);
likeFavRoute.get("/like",authentication, getLike);
likeFavRoute.post("/like/:id",authentication, AddLike);

module.exports = likeFavRoute;
