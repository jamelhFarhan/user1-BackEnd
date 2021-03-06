require("dotenv").config();
const express = require("express");
const app = express();
require("./db/dbb");
app.use(express.json());

const cors = require("cors");
app.use(cors());

const Routeproudect = require("./db/routers/route/Routeproudect");
const loginRout = require("./db/routers/route/loginRout");
const signUp = require("./db/routers/route/signUp");

const likeFavRoute = require("./db/routers/route/likeFavRoute");
app.use(Routeproudect);
app.use(loginRout);
app.use(signUp);
app.use(likeFavRoute);
const Port = 5000;

app.listen(process.env.PORT || Port, () => {
  console.log("server run on 5000 port");
});
