const app = require("express")();
const User = require("../../models/user")

app.post("/",(req,res)=>{
    console.log(req.body);
    User.findOneAndUpdate({id:req.body.id},
        {movieName:req.body.movieName,banner:req.body.banner,roomId:req.body.roomid,movieUrl:req.body.url},
        (err,data)=>{
            if(err){
                console.log(err);
                res.send(false);
              }
              else{
                res.send(true);
              }
        })
      
  })
  
  module.exports = app;