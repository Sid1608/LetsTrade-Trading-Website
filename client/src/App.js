import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useCookies } from 'react-cookie'
import "bootstrap/dist/css/bootstrap.min.css";
import Disclaimer from "./pages/disclaimer/Disclaimer"
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactUs from "./pages/contact/ContactUs";
import Companies from "./pages/companies/Companies";
import CompanyDetail from "./pages/companies/CompanyDetail";
import AboutUs from "./pages/about/AboutUs";
import Blogs from "./pages/blogs/Blogs";
import Login from "./pages/login/Login";
import AdminLogin from "./components/admin/AdminLogin";
import ChannelPartner from "./components/channelPartner/ChannelPartner"
import {Link} from "react-router-dom"
import Home from "./pages/home/Home";
import { Button ,Card} from '@material-ui/core';
import "./App.css";
import Header from "./components/header/Header";
import Signup from "./pages/signup/Signup";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import PasswordReset from "./components/passwordReset/PasswordReset";
import EmailVerify from "./components/emailVerify/EmailVerify";
import { useSelector } from 'react-redux';
const nav_links = [
  {
    label: "Home",
    path: "",
    component: Home,
  },
  {
    label: "About Us",
    path: "about",
    component: AboutUs,
  },
  {
    label: "Companies",
    path: "companies",
    component: Companies,
  },
  {
    label: "Contact Us",
    path: "contact",
    component: ContactUs,
  },
  {
    label:"Admin Login",
    path: "admin",
    component:AdminLogin
  },
  {
    label:"Blogs",
    path:"Blogs",
    component:Blogs
  }
];

function App(props) {
  // const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  // const [user, setUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const user=useSelector(state=>state.user.currentUser);
  console.log(user);
//  console.log(props.match.path);
  // const handleNavClick = (tab) => {
  //   window.location.replace(`${props.match.path}${tab["path"]}`);
  // };
  const { match } = props;
  // const user=false
  // useEffect(() => {
  //   if (localStorage.getItem("isLoggedIn")===true) {
  //     setUser(true);
  //     // setIsAdmin(JSON.parse(localStorage.getItem("isAdmin")));
  //   }
  // },[]);
  // console.log(user);

  return (
    <BrowserRouter>
    <div >
      {
        user&&(
        <div style={{margin:"65px"}}>
          <Header/>
        </div>)
      }
      <Routes>
          {user ?(
            <>
      
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/companies" element={<Companies/>}/>
                <Route exact path="/contact" element={<ContactUs/>}/>
                <Route  exact  path={`companies/:slug/`} element={<CompanyDetail/>}/>
                <Route exact path="/about" element={<AboutUs/>}/>
                <Route exact path="/blogs" element={<Blogs/>}/>
                <Route exact path="/disclaimer" element={<Disclaimer/>}/>
                {/* <Route exact path="/login" element={<Login/>}/> */}
                {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
                <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
                <Route path="/users/:id/verify/:token" element={<EmailVerify />} />

            </> 

          ):(
            <>
              <Route exact path={"/"} element={<Navigate replace to="/login"/>}/>
              <Route exact path="/companies" element={<Navigate replace to="/login"/>}/>
              <Route exact path="/contact" element={<Navigate replace to="/login"/>}/>
              <Route  exact  path={`companies/:slug/`} element={<Navigate replace to="/login"/>}/>
              <Route exact path="/about" element={<Navigate replace to="/login"/>}/>
              <Route exact path="/blogs" element={<Navigate replace to="/login"/>}/>
              <Route exact path="/disclaimer" element={<Navigate replace to="/login"/>}/>
              <Route exact path="/login" element={<Login />}/>
              <Route exact path="/signup" element={<Signup/>}/>
              <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
              <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
            
            
            </>
          )}
         
          
          
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
