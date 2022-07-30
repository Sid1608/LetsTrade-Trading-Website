import { Avatar } from '@mui/material';
import React,{forwardRef} from 'react';
import './Post.css';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import InputOption from '../Feed/InputOption';
// const Post = forwardRef(({name,desc,message,photoUrl},ref) => {
const Post = forwardRef(({name,desc},ref) => {



    return (
        <div ref={ref} className="post">
            <div className="post__header">
                {/* <Avatar src={photoUrl}>{name[0]}</Avatar> */}
                <Avatar src="">{"s"}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{desc}</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
            </div>
        </div>
    )
})

export default Post