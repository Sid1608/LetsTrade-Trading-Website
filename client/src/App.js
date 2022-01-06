import React from "react";
import {Route,Switch,BrowserRouter as Router} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Disclaimer from "./pages/disclaimer/Disclaimer"
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactUs from "./pages/contact/ContactUs";
import Companies from "./pages/companies/Companies";
import CompanyDetail from "./pages/companies/CompanyDetail";
import AboutUs from "./pages/about/AboutUs";
import Blogs from "./pages/blogs/Blogs";
import AdminLogin from "./components/admin/AdminLogin";
import ChannelPartner from "./components/channelPartner/ChannelPartner"
import {Link} from "react-router-dom"
import Home from "./pages/home/Home";
import { Button ,Card} from '@material-ui/core';
import "./App.css";
import Header from "./components/header/Header";

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

 console.log(props.match.path);
  const handleNavClick = (tab) => {
    window.location.replace(`${props.match.path}${tab["path"]}`);
  };
  const { match } = props;


  return (
    
    <div >
      <Header/>
      <Router>
        <Switch>
          {nav_links.map((page, index) => {
            return (
              <Route
                exact
                key={index}
                path={`${match.path}${page.path}`}
                // path={`{"/"}${page.path}`}
                component={page.component}
              />
            );
          })}
          <Route
            exact
            path={`${match.path}companies/:slug/`}
            component={CompanyDetail}
          />
          <Route exact path="/about">
            <AboutUs/>
          </Route>
          <Route exact path="/blogs">
            <Blogs/>
          </Route>
          <Route exact path="/disclaimer">
            <Disclaimer/>
          </Route>
          <Route
            exact
            path="/"
            component={Home}
          />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
