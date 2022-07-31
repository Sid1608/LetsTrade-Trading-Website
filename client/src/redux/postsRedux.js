import {createSlice} from '@reduxjs/toolkit';


const  postsSlice = createSlice({
    name:'posts',
    initialState:{
       userPosts:null, 
       isFetching:false,
       error:false,
       allPosts:null
    },
    reducers:{
        postsStart:(state)=>{
            state.isFetching=true;
        },
        postsSuccess:(state,action)=>{
            state.isFetching=false;
            state.userPosts=action.payload;
            state.error = false;
        },
        postsFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
        postsAllStart:(state)=>{
            state.isFetching=true;
        },
        postsAllSuccess:(state,action)=>{
            state.isFetching=false;
            state.allPosts=action.payload;
            state.error = false;
        },
        postsAllFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
        addPostsStart:(state)=>{
            state.isFetching=true;
            state.isFetching=false;
        },
        addPostsSuccess:(state,action)=>{
        state.isFetching=true;
        state.allPosts.push(action.payload)
        },
        addPostsFailure:(state)=>{
        state.isFetching=false;
        state.error=true;
        },
        likePostsStart:(state)=>{
            state.isFetching=true;
            state.isFetching=false;
        },
        likePostsSuccess:(state,action)=>{
        state.isFetching=true;
        state.allPosts.push(action.payload)
        },
        likePostsFailure:(state)=>{
        state.isFetching=false;
        state.error=true;
        }
        
    },
})
export const {
    postsStart,
    postsSuccess,
    postsFailure,
    postsAllFailure, postsAllStart, postsAllSuccess,addPostsFailure,addPostsSuccess,addPostsStart
  } = postsSlice.actions;

export default postsSlice.reducer;