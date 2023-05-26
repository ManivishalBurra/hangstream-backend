const express = require("express");
const mongoose = require("mongoose");
const app = express();
const server = require("http").createServer(app);
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

const dburl =
  "mongodb+srv://hangstream:Muddup3ru!@cluster0.63pom.mongodb.net/hangStreamDB?retryWrites=true&w=majority";
mongoose.connect(
  dburl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, res) {
    try {
      console.log("Connected to Database");
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

const login = require("./routes/login/login.js");
app.use("/credentials", login);

const home = require("./routes/Home/init");
app.use("/home", home);

const movies = require("./routes/Movies/init");
app.use("/movies", movies);

const private = require("./routes/Private/init");
app.use("/private", private);

const notifications = require("./routes/Notifications/init");
app.use("/notifications", notifications);


server.listen(process.env.PORT || 7993, () => {
  console.log("im using at port 7000");
});

console.log("server started");
