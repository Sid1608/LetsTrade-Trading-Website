const router=require("express").Router();
const {User,validate}=require("../models/User");
const joi=require("joi")
const bcrypt = require("bcrypt");//asynchronous function 
const passwordComplexity=require('joi-password-complexity');
const jwt=require("jsonwebtoken");
//Register

router.post("/register",async(req,res)=>{
  try{
    console.log(req.body)
    const{error}=validate(req.body);
    if(error){
      console.log("inside 1")
      return res.status(400).send({message:error.details[0].message});
    }
    const user=await User.findOne({email:req.body.email});
    if(user){
      return res.status(409).send({message:"User with given email already exists"})
    }
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(req.body.password,salt);
    //create new user
    const newUser= await new User({
      ...req.body,
      password:hashedPassword
    })
    const newuser=await newUser.save();
    res.status(201).send({message:"User created Successfully"})

  }catch(error){
    console.log(error);
    res.status(500).send({message:"Internal Server Error"})
  }
})

router.post("/login",async(req,res)=>{
  try{
    const {error}=validateUser(req.body);
    if(error){
      return res.status(400).send({message:error.details[0].message});
    }
    const user=await User.findOne({email:req.body.email});
    if(!user){
      return res.status(401).send({message:"Invalid Email or Password"})
    }
    const validPassword=await bcrypt.compare(req.body.password,user.password);
    !validPassword && res.status(401).json("Invalid Email or Password")
    const token=user.generateAuthToken();
    res.cookie("jwt",token,{
      expires:new Date(Date.now()+3000000),
      httpOnly:true
    })
    console.log(token)
    res.status(200).send({data:token,message:"Logged in successfully"})
    
  }catch(error){
    console.log(error)
    res.status(500).json({message:"INternal Server Error"})
  }
})

const validateUser=(data)=>{
  const schema=joi.object({
    email:joi.string().email().required().label("Email"),
    password:passwordComplexity().required().label("Password"),
  })
  return schema.validate(data);
}

// router.post("/register",async (req,res)=>{
    
//     try{
//         //generate new password
//         const salt=await bcrypt.genSalt(10);
//         const hashedPassword=await bcrypt.hash(req.body.password,salt);
//         //create new user
//         const newUser= await new User({
//             username:req.body.username,
//             email:req.body.email,
//             password:hashedPassword
//         })
//         //save user and respond
//         const user=await newUser.save();
//         const token = jwt.sign(
//             { user_id: user._id, username:user.username,email:user.email },
//             process.env.TOKEN_KEY,
//             {
//               expiresIn: "10h",
//             }
//           );
//           // save user token
//           user.token = token;
//         res.status(200).json(user);
//     }catch(err){
//         res.status(500).json(err.message)
//     }
// });


//Login
// router.post("/login",async (req,res)=>{
//     try{
//         const user =await User.findOne({email:req.body.email});
//         !user && res.status(404).send("oops user not found!");
//         const validPassword=await bcrypt.compare(req.body.password,user.password);
//         !validPassword && res.status(400).json("wrong password")
//         const token = jwt.sign(
//             { user_id: user._id, username:user.username,email:user.email },
//             process.env.TOKEN_KEY,
//             {
//               expiresIn: "10h",
//             }
//           );
    
//           // save user token
//           user.token = token;
//         res.status(200).json(user);
//     }catch(err){
//         res.status(500).json(err)
//     }
// })


module.exports=router;