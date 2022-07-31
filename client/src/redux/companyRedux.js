import {createSlice} from '@reduxjs/toolkit';


const  companySlice = createSlice({
    name:'company',
    initialState:{
       currentCompany:null, 
       isFetching:false,
       error:false,
       Companies:null
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
        companyAllStart:(state)=>{
            state.isFetching=true;
        },
        companyAllSuccess:(state,action)=>{
            state.isFetching=false;
            state.Companies=action.payload;
            state.error = false;
        },
        companyAllFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
        addCompanyStart:(state)=>{
            state.isFetching=true;
            state.isFetching=false;
        },
        addCompanySuccess:(state,action)=>{
            state.isFetching=true;
            state.companies.push(action.payload)
        },
        addCompanyFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
        deleteCompanyStart:(state)=>{
            state.isFetching=true;
            state.isFetching=false;
        },
        deleteCompanySuccess:(state,action)=>{
            state.isFetching=true;
            // state.companies.push(action.payload)
            state.Companies.splice(
                state.Companies?.findIndex((company)=>company?._id===action?.payload),
                1
            );
        },
        deleteCompanyFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
        
        
    },
})
export const {
    companyStart,
    companySuccess,
    companyFailure,
    companyAllFailure, 
    companyAllStart, 
    companyAllSuccess,
    addCompanyStart,
    addCompanySuccess,
    addCompanyFailure,
    deleteCompanyStart,
    deleteCompanySuccess,
    deleteCompanyFailure
  } = companySlice.actions;

export default companySlice.reducer;