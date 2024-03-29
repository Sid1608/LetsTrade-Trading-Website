import React,{useEffect,useState} from 'react'
import blogPost from "../../components/blogs/blogPost"
import axios from "axios";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, IconButton } from '@mui/material';
import ThumbUp from '@mui/icons-material/ThumbUp';
import Sidebar from '../../components/blogs/Sidebar/Sidebar';
import Widgets from '../../components/blogs/Widgets/Widgets';
import Feed from '../../components/blogs/Feed/Feed';
import "./Blogs.css"






const Blogs = () => {
    // const [posts,setPosts]=useState([]);
    //Getting  post of users
    // useEffect(() => {
    //     axios.get("http://localhost:8081/api/posts/timeline/all").then(res => {
    //       console.log(res.data.posts)
    //       setPosts(res.data.posts);
    //       console.log(posts)
    //       console.log(posts)
    //     }).catch(error=>{
    //         console.log(error);
    //     })
    //   }, [])
    return (
        <div className="app">
            <div className="app__body">
                <Sidebar/>
                {/* Feed */}
                <Feed/>
                {/* Widgets */}
                <Widgets/>
            </div>
            
        </div>
        // <div>
            
        //     <h1>Blogs will presented here</h1>
        //     <h1>Blogs will presented here</h1>
        //     {
        //         posts.map((post,i)=>{
        //             return(
        //                 <blogPost 
        //                     key={post.id}
        //                     name={post.name}
        //                     description={post.desc}
        //                     message={post.message}
        //                     photoUrl={post.photoUrl}
        //                 />
        //             );
        //         })
        //     }
            
        // </div>
    )
}

export default Blogs
