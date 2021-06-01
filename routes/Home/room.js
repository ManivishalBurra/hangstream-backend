const app = require("express")();
const User = require("../../models/user")
const Movie = require("../../models/movie")
app.post("/",(req,res)=>{
    if(req.body.source==="admin"){
    const movie = new Movie({
      movieName:req.body.movieName,
      banner:req.body.banner,
      movieUrl:req.body.url,
    });
    movie.save();
    }
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