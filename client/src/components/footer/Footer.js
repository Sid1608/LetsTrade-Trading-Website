import React from "react";
import "./Footer.css";
import {NavLink,Link} from "react-router-dom";

import { Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import { Button, Header, Icon, Input , TextArea, Form} from 'semantic-ui-react'
function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col-lg-3 col-sm-6">
            <h2 >Let's Trade</h2>
            <h4 className="list-unstyled">
              <li>Buy And Sell</li>
              <li>Unlisted And Pre-Ipo Shares</li>
              
            </h4>
          </div>
           {/* Column2 */}
          <div className="col-lg-3 col-sm-6">
            <h2 >Usefull Links</h2>
            <ui className="list-unstyled">
              <li> <Link style={{color:"white",textDecoration:"none",marginBottom:"200px"}} to="/">Home</Link></li>
              <li><NavLink style={{color:"white",textDecoration:"none"}} to="/about"> About Us</NavLink></li>
              <li><NavLink style={{color:"white",textDecoration:"none"}} to="/companies">Companies</NavLink></li>
              <li><NavLink style={{color:"white",textDecoration:"none"}} to="/contact">contact us</NavLink></li>
              
            </ui>
          </div>
          {/* Column3 */}
          <div className="col-lg-3 col-sm-6">
            <h2>Social Links</h2>
            <ui className="list-unstyled">
              <li><Button style={{marginBottom:"5px"}} circular color='facebook' icon='facebook' onClick={()=>{window.location.href="https://www.facebook.com/Iris-Capital-111991564623602"}}/></li>
              <li><Button   style={{marginBottom:"5px"}} className="footer__button" circular color='twitter' icon='twitter' onClick={()=>{window.location.href="https://twitter.com/capital_iris"}}/></li>
              <li><Button  style={{marginBottom:"5px"}} className="footer__button" circular color='linkedin' icon='linkedin' onClick={()=>{window.location.href="https://www.linkedin.com/company/iris-capital9"}} /></li>
              <li><Button  style={{marginBottom:"5px"}} className="footer__button" circular color='instagram' icon='instagram'  onClick={()=>{window.location.href="https://www.instagram.com/iris.capital_9/"}} /></li>
            </ui>
          </div>
         
          {/* Column4 */}
          <div className="col-lg-3 col-sm-6">
            <h2>Contact Us</h2>
            <ui className="list-unstyled">
              <li><strong>contact 1:</strong> +91 8824885175</li>
              <li><strong>contact 2:</strong> +91 9214699506</li>
              <li><strong>Email:</strong>akarsiddharth@gmail.com</li>
              <li><strong>Address:</strong> ast, Mumbai, Maharastra 400076</li>
            </ui>
          </div>
        </div>
        <hr />
        <div  className="row">
          <p className="col-sm footer_rights">
            &copy;{new Date().getFullYear()} Let's Trade | <NavLink style={{color:"white",textDecoration:"none"}} to="/disclaimer">Disclaimer</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
