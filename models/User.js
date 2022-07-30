const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const joi=require('joi');
const passwordComplexity=require('joi-password-complexity');
// const complexityOptions = {
//     min: 5,
//     max: 250,
//     lowerCase: 1,
//     upperCase: 1,
//     numeric: 1,
//     symbol: 1,
//     requirementCount: 2,
//   };
const UserSchema =new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        require: true,
        min:3,
        max:20,
        unique:true
    },
    email:{
        type:String,
        required: true,
        max:50,
        unique:true,
    },
    password:{
        type: String,
        required: true,
        min:6
    },
    profilePicture:{
        type:String,
        default:""
    },
    followers:{
        type: Array,
        ref:'User',
        default:[]
    },
    followings:{
        type: Array,
        ref:'User',
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default: false,
    },
    desc:{
        type:String,
        max:50,
    },
    city:{
        type:String,
        max:50,
    },
    from:{
        type:String,
        max:50,
    },
    verified: { type: Boolean, default: false },

},
{
    timestamps: true
}

);

UserSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({id:this._id},process.env.TOKEN_KEY,{expiresIn:"7d"})
    return token;
}

const User=mongoose.model("User",UserSchema);
const validate=(data)=>{
    const schema=joi.object({
        firstName:joi.string().required().label("First Name"),
        lastName:joi.string().required().label("Last Name"),
        email:joi.string().email().required().label("Email"),
        password:passwordComplexity().required().label("Password"),
        username:joi.string().required().min(3).max(50).label("Username"),
        // profilePicture:joi.string().label("Profile Picture"),
        // followers:joi.array().items(),
        // followings:joi.array().items(),
        // isAdmin:joi.boolean().label("isAdmin"),
        // desc:joi.string().label("Description"),
        // city:joi.string().label("City"),
        // from:joi.string().label("From"),


    })
    return schema.validate(data)
}

// module.exports = mongoose.models.nameOne || {User,validate};

module.exports={User,validate}