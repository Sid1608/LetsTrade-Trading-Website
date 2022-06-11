import React,{useEffect,useState} from 'react'
import blogPost from "../../components/blogs/blogPost"
import axios from "axios";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, IconButton } from '@mui/material';
import ThumbUp from '@mui/icons-material/ThumbUp';
const Blogs = () => {
    const [posts,setPosts]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:8081/api/posts/timeline/all").then(res => {
          console.log(res.data.posts)
          setPosts(res.data.posts);
          console.log(posts)
          console.log(posts)
        }).catch(error=>{
            console.log(error);
        })
      }, [])
    return (
        <div>
            
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            {
                posts.map((post,i)=>{
                    return(
                        <div>
                            <hr/>
                            <div>
                                <Avatar/> <h1>Siddhart Akar</h1>
                                <h1>{post.desc}</h1>
                                <IconButton aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton aria-label="delete">
                                    <ThumbUp/>
                                </IconButton>
                                
                                
                            </div>
                           
                        </div>
                        
                        // <blogPost post={post}/>
                    );
                })
            }
            
        </div>
    )
}

export default Blogs
