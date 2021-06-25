const app = require("express")();

const privatelist = require("./privatelist");
const upload=require("./upload");


app.use("/privatelist",privatelist);
app.use("/upload",upload);



module.exports = app;