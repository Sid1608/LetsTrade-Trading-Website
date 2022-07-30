import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import React, { useState,useEffect } from 'react'
import './Feed.css'
import InputOption from './InputOption';
import Post from '../Posts/Post';
// import { selectUser } from '../../features/userSlice';
import { useSelector,useDispatch } from 'react-redux';
import FlipMove from 'react-flip-move';
import { createPosts, getAllPosts } from '../../../redux/apiCalls';
const Feed = () => {
    // const user=useSelector(selectUser);
    const dispatch= useDispatch();
    const [input,setInput]=useState('');
    // const [posts,setPosts]=useState([]);
    const posts=useSelector(state=>state.posts?.allPosts)
    const user=useSelector(state=>state.user.currentUser)
    console.log(posts);
    useEffect(()=>{
        //real time listener for posts(detect changes)
        getAllPosts(dispatch)
    },[])

    const sendPost = (e) =>{
        e.preventDefault();
        // db.collection('posts').add({
        //     name:user.displayName,
        //     description:user.email,
        //     message:input,
        //     photoUrl:user.photoUrl||"",
        //     timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        // })
        createPosts(dispatch,{userId:user._doc._id,desc:input})
        setInput("");
    }
   
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={e=>setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                    
                </div>
                <div className="feed__inputOptions">
                          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
                </div>
            </div>
            {/* Posts */}
            <FlipMove>
                {
                    posts?.map((post)=>(
                        <Post 
                            key={post?.id}
                            name={post?.userId?.firstName }
                            desc={post?.desc}
                            // message={message}
                            // photoUrl={photoUrl}
                        />
                    ))
                }
            </FlipMove>
            
            
        </div>
    )
}

export default Feed