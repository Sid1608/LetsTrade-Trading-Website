const Company=require("../models/Company")
const mongoose=require("mongoose")


exports.Company_get=async(req,res)=>{
    try{
        const company=await Company.findById({_id:req.params.companyId});
        res.status(200).json({company:company});

    }catch(err){
        res.status(500).json({status: 'cannot get',error:err});
    }
}
exports.AllCompany=async(req,res)=>{
    try {
        const companies=await Company.find();
        res.status(200).json({companies:companies});
    } catch (err) {
        res.status(500).json({status: 'cannot get',error:err});
    }
}
exports.AddCompany=async(req,res)=>{
    try {
        
        const newCompany=await new Company({
            _id: new mongoose.Types.ObjectId(),
            CompanyName:req.body.CompanyName,
            Category:req.body.Category,
            // CompanyLogo:req.file.path
        })
        const company=await newCompany.save();
        res.status(201).json({status: 'company created successfully',company: company});
    } catch (err) {
        console.log(err);
        res.status(500).json({status: 'company not created successfully',error:err});
    }
}



exports.UpdateBuyPrice=async(req,res)=>{
    try {
        const companyId=req.params.companyId;
        const response=await Company.updateOne({_id:companyId},{$set:{BuyPrice:req.body.BuyPrice}});
        res.status(201).json({status:"updated successfully"});
    } catch (err) {
        res.status(500).json({status: 'not able to update',error:err});
    }
}
exports.UpdateSellPrice=async(req,res)=>{
    try {
        const companyId=req.params.companyId;
        const response=await Company.updateOne({_id:companyId},{$set:{SellPrice:req.body.SellPrice}});
        res.status(201).json({status:"updated successfully"});
    } catch (err) {
        res.status(500).json({status: 'not able to update',error:err});
    }
}

exports.UpdateAboutUs=async(req,res)=>{
    try {
        const companyId=req.params.companyId;
        const response=await Company.updateOne({_id:companyId},{$set:{AboutUs:req.body.SellPrice}});
        res.status(201).json({status:"updated successfully"});
    } catch (err) {
        res.status(500).json({status: 'not able to update',error:err});
    }
}

exports.UploadShareHoldings=async(req,res)=>{
    try{
        
        const companyId=req.params.companyId;
        const response=await Company.updateOne({_id:companyId},{$set:{Shareholdings:req.file.path}});
        res.status(201).json({status:"updated successfully"});

    }catch(err){
        // console.log('kya hua')
        console.log(req.file);
        res.status(500).json({status: 'not able to update',error:err});
    }
}
exports.UploadCompanyLogo=async(req,res)=>{
    try{
        
        const companyId=req.params.companyId;
        const response=await Company.updateOne({_id:companyId},{$set:{CompanyLogo:req.file.path}});
        res.status(201).json({status:"updated successfully"});

    }catch(err){
        console.log('kya hua')
        console.log(req.file);
        res.status(500).json({status: 'not able to update',error:err});
    }
}
exports.UploadBalancesheets=async(req,res)=>{
    try{
        
        const companyId=req.params.companyId;
        const response=await Company.updateOne({_id:companyId},{$push:{Balancesheets:req.file.path}});
        res.status(201).json({status:"updated successfully"});

    }catch(err){
        // console.log('kya hua')
        console.log(req.file);
        res.status(500).json({status: 'not able to update',error:err});
    }
}
exports.UploadProfitAndLoss=async(req,res)=>{
    try{
        
        const companyId=req.params.companyId;
        const response=await Company.updateOne({_id:companyId},{$push:{ProfitAndLoss:req.file.path}});
        res.status(201).json({status:"updated successfully"});

    }catch(err){
        // console.log('kya hua')
        console.log(req.file);
        res.status(500).json({status: 'not able to update',error:err});
    }
}
exports.UploadAnnualReports=async(req,res)=>{
    try{
        
        const companyId=req.params.companyId;
        const response=await Company.updateOne({_id:companyId},{$push:{AnnualReports:req.file.path}});
        res.status(201).json({status:"updated successfully"});

    }catch(err){
        // console.log('kya hua')
        console.log(req.file);
        res.status(500).json({status: 'not able to update',error:err});
    }
}


exports.DeleteCompany=async(req,res)=>{
    try{
        await Company.deleteOne({_id:req.params.companyId})
        res.status(200).json({status: 'success'});
    }catch(err){
        res.statu(500).json({status: 'failure'});
    }
}
exports.LikeCompany=async(req,res)=>{
    try{
        const company=await  Company.findById(req.params.CompanyId);
        if(!company.Like.includes(req.body.userId)){
            await company.updateOne({$push:{Like:req.body.userId}})
            res.status(200).json("The Company has been liked")
        }else{
            await company.updateOne({$pull:{Like:req.body.userId}})
            res.status(200).json("The Comapany has been disliked")
        }
    }catch(err){
        res.status(500).json(err);
    }
}