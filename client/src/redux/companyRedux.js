import {createSlice} from '@reduxjs/toolkit';


const  companySlice = createSlice({
    name:'company',
    initialState:{
       currentCompany:null, 
       isFetching:false,
       error:false,
    },
    reducers:{
        companyStart:(state)=>{
            state.isFetching=true;
        },
        companySuccess:(state,action)=>{
            state.isFetching=false;
            state.currentCompany=action.payload;
            state.error = false;
        },
        companyFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
        
    },
})
export const {
    companyStart,
    companySuccess,
    companyFailure,
  } = companySlice.actions;

export default companySlice.reducer;