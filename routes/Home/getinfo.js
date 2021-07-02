const app = require("express")();
const User = require("../../models/user")

app.post("/",async (req,res)=>{
    
    await User.find({id:req.body.id},(err,data)=>{
            if(err){
                console.log(err);
                res.send(false);
              }
              else{
                res.send(data);
              }
        })
      
  })

module.exports = app;