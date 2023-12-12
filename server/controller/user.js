const  User = require("../db/db");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();




const register=async (req, res) => {
  let user= new User(req.body);
  let result= await user.save();
  result= result.toObject();
  delete result.password
  jwt.sign({result},process.env.JWT_SECRET,{expiresIn:"1h"},(err,token)=>{
    if(err){
      res.send({result:"Something is wrong"})
    }
    res.send({result,auth:token})
  })
}

 
  const login=async(req,res)=>{   
     if(req.body.password && req.body.email ){
      let user = await User.findOne(req.body).select("-password");
      if(user){
        jwt.sign({user},process.env.JWT_SECRET,{expiresIn:"1h"},(err,token)=>{
          if(err){
            res.send({result:"Something is wrong"})
          }
          res.send({user,auth:token})
        })
      }
      else{
        res.send({result:"No user found"})
      }
     }
  
  }


  module.exports={register,login}
