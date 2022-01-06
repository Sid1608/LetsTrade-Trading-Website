const router=require("express").Router();
const fs=require("fs");
const User=require("../models/Company");
const companyController=require("../controllers/companyController")
const multer=require('multer');
const path = require('path');
//execute multer: dest-specifies folder where multer will try to store all incoming files
const storage=multer.diskStorage({
    destination: function(req, file, cb) {
        fs.mkdir('./uploads/',(err)=>{
           cb(null, './uploads/');
        });
      },
    filename: function(req, file, cb){
         const now = new Date().toISOString(); 
         const date = now.replace(/:/g, '-'); 
         cb(null, date + file.originalname);
    },
})
const fileFilter=(req,file,cb)=>{
   
    if(file.mimetype ===  'image/jpeg'|| file.mimetype==='image/png' || file.mimetype==='application/pdf'){
        //accpet a file
        cb(null,true);
    }else{
        //reject a file 
        cb(null,false);
    }
}
const upload=multer({
    storage:storage,
    limits:{
       fileSize: 1024*1024*5
    },
    fileFilter:fileFilter,
});
//1. Get a particular company
router.get("/allCompany",companyController.AllCompany);
//2. Get all companies
router.get("/:companyId",companyController.Company_get);
//3. for updating 
router.post("/addCompany",companyController.AddCompany);


router.patch("/updateBuyPrice/:companyId",companyController.UpdateBuyPrice);
router.patch("/updateSellPrice/:companyId",companyController.UpdateSellPrice);
router.patch("/updateAboutUs/:companyId",companyController.UpdateAboutUs);

router.post("/uploadShareholdings/:companyId",upload.single('Shareholdings'),companyController.UploadShareHoldings);
router.post("/uploadBalancesheets/:companyId",upload.single('Balancesheets'),companyController.UploadBalancesheets);
router.post("/uploadProfitAndLoss/:companyId",upload.single('ProfitAndLoss'),companyController.UploadProfitAndLoss);
router.post("/uploadAnnualReports/:companyId",upload.single('AnnualReports'),companyController.UploadAnnualReports);


router.delete("/deleteCompany/:companyId",companyController.DeleteCompany);
router.put("/like/:companyId",companyController.LikeCompany);








module.exports=router;