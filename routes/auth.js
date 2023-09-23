const router = require("express").Router();
const { User, validate } = require("../models/User");
const joi = require("joi")
const bcrypt = require("bcrypt");//asynchronous function 
const passwordComplexity = require('joi-password-complexity');
const sendEmail = require("../utils/sendEmail");
const Token = require("../models/token");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
//Register

router.post("/register", async (req, res) => {
  try {
    console.log(req.body)
    const { error } = validate(req.body);
    if (error) {
      console.log("inside 1")
      return res.status(400).send({ message: error.details[0].message });
    }
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(409).send({ message: "User with given email already exists" })
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //create new user
    const newUser = await new User({
      ...req.body,
      password: hashedPassword
    })
    const newuser = await newUser.save();
    const token = await new Token({
      userId: newUser._id,
      token: crypto.randomBytes(32).toString("hex")
    }).save();
    const url = `${process.env.BASE_URL}users/${newUser._id}/verify/${token.token}`;
    await sendEmail(newUser.email, "Verify Email", url);
    res.status(201).send({ message: "An email sent to your account please veriy it" })

  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" })
  }
})

router.post("/login", async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send({ message: "Invalid Email or Password" })
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    !validPassword && res.status(401).json("Invalid Email or Password")
    if (!user.verified) {
      let token = await Token.findOne({ userId: user._id });
      if (!token) {
        token = await new Token({
          userId: user._id,
          token: crypto.randomBytes(32).toString("hex"),
        }).save();
        const url = `${process.env.BASE_URL}users/${user.id}/verify/${token.token}`;
        await sendEmail(user.email, "Verify Email", url);
      }

      return res
        .status(400)
        .send({ message: "An Email sent to your account please verify" });
    }
    const token = user.generateAuthToken();

    console.log(token)
    res.status(200).send({ token, ...user })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "INternal Server Error" })
  }
})
router.get("/:id/verify/:token/", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send({ message: "Invalid link" });

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send({ message: "Invalid link" });

    await User.updateOne({ _id: user._id, verified: true });
    await token.remove();

    res.status(200).send({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

const validateUser = (data) => {
  const schema = joi.object({
    email: joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
    // verified: joi.boolean().valid(true).required().label("Email Verification"),
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


module.exports = router;