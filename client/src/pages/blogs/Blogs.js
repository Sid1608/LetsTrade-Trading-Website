import React,{useEffect,useState} from 'react'
import axios from "axios";
const Blogs = () => {
    const [posts,setPosts]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/api/posts/timeline/all").then(res => {
          console.log(res.data.posts)
          setPosts(res.data.posts);
          console.log(posts)
        }).catch(error=>{
            console.log(error);
        })
      }, [])
    return (
        <div>
            
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            {
                posts.map((post,i)=>{
                    return(
                    <h1>{post.desc}</h1>
                    );
                })
            }
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
            <h1>Blogs will presented here</h1>
        </div>
    )
}

export default Blogs
