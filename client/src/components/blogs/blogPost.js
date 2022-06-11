import React from 'react'
import { Avatar } from '@mui/material';
const blogPost = ({post}) => {
  return (
    <div>
      <hr/>
      <div>
        <Avatar/> 
        <h1>Siddhart Akar</h1>
      </div>
      <h1>{post.desc}</h1>
    </div>
  )
}

export default blogPost
