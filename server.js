const express=require("express");
const app=express();
const mongoose=require('mongoose');
const dotenv=require("dotenv");
const helmet=require("helmet");
const morgan=require("morgan");
const cors=require("cors");
const userRoute=require("./routes/users");
const authRoute=require("./routes/auth");
const postRoute=require("./routes/posts");
const companyRoute=require("./routes/companies");

dotenv.config();

mongoose.connect(process.env.MONGO_URL,err=>{
    if(err) throw err;
    console.log('conneted to mongodb')
})



//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);
app.use("/api/company",companyRoute);

app.get("/",(req,res)=>{
    res.send("welcome to home page")
})


app.listen(8081,()=>{
    console.log("Server started on port 8081");
})

// Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
// Morgan: HTTP request logger middleware for node.js