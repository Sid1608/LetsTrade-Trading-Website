const mongoose=require('mongoose');

const CompanySchema =new mongoose.Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId
    },
    CompanyName:{
        type: String,
        required: true,
    },
    Category:{
        type:String,
        required:true,
       
    },
    CompanyLogo:{
        type:String,
        default:"",
    },
    BuyPrice:{
        type:Number,
        default:0,
    },
    SellPrice:{
        type:Number,
        default:0,
    },
    AboutUs:{
        type:String,  
        default:"",
    },
    FinancialOverview:{
        type:String,
    },
    Shareholdings:{
        type:String,
    },
    Balancesheets:[{type:String}],
    ProfitAndLoss:[{type:String}],
    AnnualReports:[{type:String}],
    Like:{
        type:Array,
        default:[]
    },
    Dislike:{
        type:Array,
        default:[]
    }
   
},
{
    timestamps: true
}

);

module.exports=mongoose.model("Company",CompanySchema);