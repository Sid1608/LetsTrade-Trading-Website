import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Button } from "@material-ui/core";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import InfoIcon from "@mui/icons-material/Info";
import BusinessIcon from "@mui/icons-material/Business";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Card, Segment, Label, Icon, Image } from "semantic-ui-react";
import Home from "../../pages/home/Home";
import AboutUs from "../../pages/about/AboutUs";
import Companies from "../../pages/companies/Companies";
import ContactUs from "../../pages/contact/ContactUs";
import AdminLogin from "../admin/AdminLogin";
import ChannelPartner from "../channelPartner/ChannelPartner";

/***Nav Links */
const nav_links = [
  {
    label: "Home",
    path: "",
    component: "",
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
    label: "Admin Login",
    path: "admin",
    component: AdminLogin,
  },
];


function Header(props) {
  /* */
  const handleNavClick = (tab) => {
    window.location.replace(`${"/"}${tab["path"]}`);
  };
  const { match } = props;
  return (
    <div className="headerContainer" >
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top" className="py-3 navsize">
        <Container>
          <Navbar.Brand bg="light" href="/">
            {/* <img
              id="nav-logo"
              className="company_logo"
              // onClick={() => {handleNavClick(nav_links[0]);}}
              style={{visibility:"visible", opacity:"1"}}
              src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png"
            /> */}
            Let's Trade
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav toggleSpace" />

          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ml-auto headerSpaceBetween">
              {/* <Image  floated="left" size="mini"  src="https://cdn-icons-png.flaticon.com/512/2406/2406254.png"/> */}
              <Nav.Link style={{ color: "white" }} href="/">
                <HomeIcon />
                Home
              </Nav.Link>
              <Nav.Link style={{ color: "white" }} href="/about">
                {" "}
                About Us
              </Nav.Link>
              <Nav.Link style={{ color: "white" }} href="/companies">
                Companies
              </Nav.Link>
              <Nav.Link style={{ color: "white" }} href="/contact">
                Contact us
              </Nav.Link>
              <Nav.Link style={{ color: "white" }} href="/blogs">
                Blogs
              </Nav.Link>

              {/* <NavDropdown title="Refferal" id="basic-nav-dropdown">
               
                
                <NavDropdown.Item href="/ChannelPartner">Channel Partners</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Professionals</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Influencers</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">SubBrokers</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Institutions</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">family office</NavDropdown.Item>
                
               </NavDropdown> */}
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link style={{ color: "white" }}>
                <AdminLogin />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
