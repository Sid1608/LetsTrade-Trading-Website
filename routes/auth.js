const router=require("express").Router();
const User=require("../models/User");
const bcrypt = require("bcrypt");//asynchronous function 
const jwt=require("jsonwebtoken");
//Register
router.post("/register",async (req,res)=>{
    
    try{
        //generate new password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(req.body.password,salt);
        //create new user
        const newUser= await new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
        })
        //save user and respond
        const user=await newUser.save();
        const token = jwt.sign(
            { user_id: user._id, username:user.username,email:user.email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "10h",
            }
          );
          // save user token
          user.token = token;
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err.message)
    }
});


//Login
router.post("/login",async (req,res)=>{
    try{
        const user =await User.findOne({email:req.body.email});
        !user && res.status(404).send("oops user not found!");
        const validPassword=await bcrypt.compare(req.body.password,user.password);
        !validPassword && res.status(400).json("wrong password")
        const token = jwt.sign(
            { user_id: user._id, username:user.username,email:user.email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "10h",
            }
          );
    
          // save user token
          user.token = token;
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports=router;