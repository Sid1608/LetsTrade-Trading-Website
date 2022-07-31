import { loginFailure, loginStart, loginSuccess,logout } from "./userRedux"
import {addCompanyFailure, addCompanyStart, addCompanySuccess, companyFailure, companyStart, companySuccess, deleteCompanyFailure, deleteCompanyStart, deleteCompanySuccess} from "./companyRedux"
import {companyAllFailure, companyAllStart, companyAllSuccess} from "./companyRedux"
import {publicRequest} from "../axios";
import { registerSuccess } from './userRedux';
import { registerFailure } from './userRedux';
import { registerStart } from './userRedux';
import { addPostsFailure, addPostsStart, addPostsSuccess, postsAllFailure, postsAllStart, postsAllSuccess } from "./postsRedux";
export const login =async (dispatch,user)=>{
    let isError={
        error:false,
        message:''
    }
    dispatch(loginStart());
    try {
        const res=await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
        return isError
    }catch(error){
        
        dispatch(loginFailure)
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ){
            console.log(error.response.data.message)
                isError.error=true;
                isError.message=error.response.data.message
          }
        return isError
    }
}
export const register = async (dispatch, user) => {
    dispatch(registerStart());
    let isError={
        error:false,
        message:''
    }

    try {
      const res = await publicRequest.post('/auth/register', user);
      dispatch(registerSuccess(res.data));
      return isError
    } catch (error) {
        dispatch(registerFailure());
        
        
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ){
            console.log(error.response.data.message)
                isError.error=true;
                isError.message=error.response.data.message
          }
        return isError
    }
  };

  export const Logout = async (dispatch, user) => {
    console.log("in logout")
    try {
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };

/**************Company*******************************/
  export const getCompany=async(dispatch,id)=>{
    dispatch(companyStart());
    try {
        const res=await publicRequest.get(`/company/${id}`)
        dispatch(companySuccess(res.data.company))
        
    }catch(error){
        
        dispatch(companyFailure())
    
    }
  }
  export const getAllCompanies=async(dispatch)=>{
    dispatch(companyAllStart());
    try {
        const res=await publicRequest.get("/company/allCompany/")
        dispatch(companyAllSuccess(res.data.companies))
        
    }catch(error){
        
        dispatch(companyAllFailure())
    
    }
  }
  export const addCompany=async (dispatch,formData)=>{
    dispatch(addCompanyStart());
    try {
        const res=await publicRequest.post("/company/addCompany",formData,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        dispatch(addCompanySuccess(res.data.company))
        
    }catch(error){
        
        dispatch(addCompanyFailure())
    
    }
  }
  //for update about, buy and sell price
  export const updateCompany=async(dispatch,query,id,data)=>{
    // dispatch(deleteCompanyStart());
    try {
      console.log(data)
        const res=await publicRequest.patch(`/company/${query}/${id}`,data)
        // console.log(res);
        alert("updated succesfully")
        // dispatch(deleteCompanySuccess(id))
        
    }catch(error){
        console.log(error)
        // dispatch(deleteCompanyFailure())
    
    }
  }
  //for uploading company documents like shareholidng, reports, financial snapshots
  export const uplodDocument=async(dispatch,query,id,data)=>{
    // dispatch(deleteCompanyStart());
    try {
      
      console.log(data)
        const res=await publicRequest.post(`/company/${query}/${id}`,data,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        // console.log(res);
        alert("updated succesfully")
        // dispatch(deleteCompanySuccess(id))
        
    }catch(error){
        console.log(error)
        // dispatch(deleteCompanyFailure())
    
    }
  }
  export const deleteCompany=async (dispatch,id)=>{
    dispatch(deleteCompanyStart());
    try {
        const res=await publicRequest.delete(`/company/deleteCompany/${id}`)
        // console.log(res);
        dispatch(deleteCompanySuccess(id))
        
    }catch(error){
        console.log(error)
        dispatch(deleteCompanyFailure())
    
    }
  }




  /**************Posts*******************************/
  export const getAllPosts=async(dispatch)=>{
    dispatch(postsAllStart());
    try {
        const res=await publicRequest.get("/posts/timeline/all")
        console.log(res);
        dispatch(postsAllSuccess(res.data.posts))
        
    }catch(error){
        
        dispatch(postsAllFailure())
    
    }
  }
  export const createPosts=async(dispatch,posts)=>{
    dispatch(addPostsStart());
    try {
        const res=await publicRequest.post("/posts",posts)
        // console.log(res);
        dispatch(addPostsSuccess(res.data.posts))
        
    }catch(error){
        
        dispatch(addPostsFailure())
    
    }
  }
