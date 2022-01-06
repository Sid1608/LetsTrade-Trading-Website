const router=require("express").Router();
const postController=require("../controllers/postController");
// router.get("/",(req,res)=>{
//     res.send("post page");
// })

//create a post
router.post("/",postController.CreatePost)

//update a post
router.put("/:id",postController.UpdatePost)

//delete a post
router.delete("/:id",postController.DeletePost)
//like a post
router.put("/:id/like",postController.LikePost) 
//get a post
router.get("/:id",postController.GetPost)
//get time line posts
router.get("/timeline/all",postController.GetPosts);


module.exports=router;