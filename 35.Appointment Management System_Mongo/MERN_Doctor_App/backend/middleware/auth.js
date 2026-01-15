const jwt = require('jsonwebtoken')
require('dotenv').config()

function auth(req,res,next){
    if(!req.headers.authorization){
        res.status(400).send({msg:"token not found"})
    }
    console.log(req.headers.authorization,"***********?????????????????")
    token = req.headers.authorization
    if(token.startsWith('Bearer')){
        console.log(token,"_________Token_______")
        token = token.split(' ')[1]
        console.log(token, "after removing bearer")

        decoded = jwt.decode(token, process.env.SECREAT_KEY)
        console.log("--------decoded---------",decoded)
        req.user = decoded
    next()

    }else{
        res.status(400).send({msg:"auth hearer bearer missing",success:false})
    }

}

function doctor(req,res,next){
    if(req.user.role == 'Doctor'){
        next()
    }else{
        res.status(200).send({msg:"you are not authorized"})
    }
}


const admin = (req, res, next) => {
  if (req.user && req.user.role === "Admin") {
    return next();
  }
  return res.status(403).json({ success: false, msg: "Admin access only" });
};

module.exports = {auth, doctor,admin}