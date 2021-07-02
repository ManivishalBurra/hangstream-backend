const app = require("express")();
const Private = require("../../models/private")

app.post("/",(req,res)=>{
  console.log(req.body.genres);
    const privatemovie = new Private({
        movieName:req.body.movieName,
        banner:req.body.banner,
        movieUrl:[req.body.url],
        ratings:req.body.ratings,
        genres:req.body.genres,
        movieID:req.body.movieID,
        plotOutline:req.body.plotOutline,
        year:req.body.year,
        poster:req.body.image,
        episode:[req.body.movieName]
      });
      privatemovie.save();
   res.send(true)
})


module.exports = app;