const router=require("express").Router();
const {User,validate}=require("../models/User");
const bcrypt=require("bcrypt");
const auth=require("../middlewares/auth")
const { route } = require("./auth");
//update user
router.put("/:id",auth, async(req,res)=>{
    if(req.body.userId===req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt=await bcrypt.genSalt(10);
                req.body.password=await bcrypt.hash(req.body.password,hash);
            
            }catch(err){
                return res.status(500).json(err);
            }
        }
        try{
            const user=await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            });
            res.status(200).json("Account updated succesfully")
        }catch(err){
            return res.status(500).json(err);
        }
    }else{
        return res.status(403).json("you can update only your account");
    }
   
})


// delete user

router.delete("/:id",auth, async(req,res)=>{
    console.log(req.body.isAdmin)
    console.log(req.body.userId)
    if(req.body.userId===req.params.id || req.body.isAdmin){
        
        try{
          
            await User.deleteOne({_id: req.params.id});
            return res.status(200).json("Account has been deleted succesfully")
        }catch(err){
            return res.status(500).json(err);
        }
    }else{
        return res.status(403).json("you can delete only your account");
    }
    
})


//geta user

router.get("/:id",auth, async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        const {password,updatedAt,...other}=user._doc;
        res.status(200).json(other);
    }catch(err){
        res.status(500).json(err);
    }
})


//  follow a user
router.put("/:id/follow",auth,async(req,res)=>{
    if(req.body.userId!=req.params.id){
        try{
            const user=await User.findById(req.params.id);
            const currentUser=await User.findById(req.body.userId)
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push:{followers:req.body.userId}});
                await currentUser.updateOne({$push:{followings:req.params.id}});
                res.status(403).json("user has been followed")
            }else{
                res.status(403).json("you already follow this user")
            }  
        }catch(err){

        }
    }else{
        res.status(403).json("you cannot follow yourself");
    }
})


// unfollow a user
router.put("/:id/unfollow",async(req,res)=>{
    if(req.body.userId!=req.params.id){
        try{
            const user=await User.findById(req.params.id);
            const currentUser=await User.findById(req.body.userId)
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$pull:{followers:req.body.userId}});
                await currentUser.updateOne({$pull:{followings:req.body.userId}});
                res.status(403).json("user has been unfollowed")
            }else{
                res.status(403).json("you are not following this user")
            }  
        }catch(err){

        }
    }else{
        res.status(403).json("you cannot unfollow yourself");
    }
})



router.get("/",async(req,res)=>{
    try {
        const users=await User.find().populate("followers")
        res.status(200).json({users:users});
        
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports=router;