import React, { useState, useEffect } from "react";
import { Input} from "semantic-ui-react";
import CompanyCard from "../../components/companies/cards/CompanyCard";
import FloatingWhatsApp from "react-floating-whatsapp";
import "./css/Companies.css";
import { auth, db } from "../../firebase";
import axios from "../../axios.js";
import AddCompany from "../../components/companies/AddCompany/AddCompany";
// import AddIcon from '@mui/icons-material/Add';
import firebase from "firebase";
import Footer from "../../components/footer/Footer"

function Companies(props) {
  /********************************useState ******************************************/
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [companyDetails, setCompanyDetails] = useState({
    companyName: "",
    ISIN: "",
    Quote: "",
    logo: "",
    category: "",
    slug: "",
  });

  /************************************************************************************ */

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {

    axios.get("http://localhost:8081/api/company/allCompany/")
      .then(response => {
        setCompanies(response.data.companies)
        // console.log(response.data.companies)
      })
      .catch(err=>{
        console.log(err);
      })

    // db.collection("companies")
    //   .orderBy("Name")
    //   .onSnapshot((snapshot) => {
    //     setCompanies(
    //       snapshot.docs.map((doc) => ({
    //         id: doc.id,
    //         company: doc.data(),
    //       }))
    //     );
    //   });
      console.log(companies)
    companies.map((element) =>
      setFilteredCompanies((preValue) => {
        return [...preValue, element];
      })
    );

    console.log(filteredCompanies);

    let isLoggedIn = firebase.auth().onAuthStateChanged((isLoggedIn) => {
      if (isLoggedIn) {
        setUser(isLoggedIn);
        console.log(isLoggedIn);
        console.log("love");
      }
    });
    console.log(user);
  }, []);

  useEffect(() => {
    let cmp = [];

    companies.filter((element) => {
      if (element.CompanyName?.toLowerCase().includes(search.toLowerCase())) {
        cmp.push(element);
      }
    });

    setFilteredCompanies([]);
    cmp.map((element) =>
      setFilteredCompanies((preValue) => {
        return [...preValue, element];
      })
    );
  }, [search, companies]);
  
  console.log(filteredCompanies);
  /**************************** This handle Search */
  const handleSearch = (query) => {
    console.log(query);
    console.log(companies);
    query = query.trim().toLowerCase();
    if (query === "") {
      companies.map((element) =>
        setFilteredCompanies((preValue) => {
          return [...preValue, element];
        })
      );
    } else {
      console.log(query);
      let cmp = [];
      // setFilteredCompanies(
      companies.filter((element) => {
        if (element.CompanyName?.toLowerCase().includes(query)) {
          cmp.push(element);
        }
      });
      //   );
      setFilteredCompanies([]);
      cmp.map((element) =>
        setFilteredCompanies((preValue) => {
          return [...preValue, element];
        })
      );
      console.log("filteredCompanies");
      console.log(filteredCompanies);
    }
  };

  return (
    <div className="companies">
      <div className="footer-sticky-popup">
        <ul className="footer-live-chat">
          <li className="whatsup-block">
            <FloatingWhatsApp
              avatar={
                window.location.origin + "/profile_pics/rushi_bhanushali.png"
              }
              phoneNumber="919892477213"
              accountName="Rushi Bhanushali"
              statusMessage="Enter the message and our team will get back to you in 24 hours."
              darkMode="True"
            />
            {/* <a href="https://api.whatsapp.com/send?phone=919137718552&amp;text=Hi%20Rushi,">
            <Image  size="mini" src="https://cdn-icons-png.flaticon.com/512/1384/1384055.png" alt="whatsup"/>
        </a> */}
          </li>
        </ul>
      </div>
      {user ? (
        <div className="companies__header">
          <div className="addButton">
            <AddCompany />
          </div>
          <div className="companies_header_right">
  
            <h3 style={{ marginTop: "10px" }}>Companies</h3>
            <div className="searchInput">
              <Input
                fluid={false}
                icon="search"
                placeholder="Search by name..."
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                // onChange={ (e, d) => {handleSearch(d.value)} }
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="companies__header">
          <div className="addButton">
            <h1></h1>
          </div>
          <div className="companies_header_right">
            <h3 style={{ marginTop: "10px" }}>Companies</h3>
            <div className="searchInput">
              <Input
                fluid={false}
                icon="search"
                placeholder="Search by name..."
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                // onChange={ (e, d) => {handleSearch(d.value)} }
              />
            </div>
          </div>
        </div>
      )}

      <div className="companies__body">
      {/* {
        filteredCompanies.map(company=>{
          axios.post("http://localhost:8080/api/company/addCompany",{
              CompanyName:company.Name,
              Category:company.Category,
              CompanyLogo:company.logo,
          }).then(response=>{
            console.log(response);
          }).catch(err=>{
            console.log(err);
          })
        })
        
      
      } */}
      
        <CompanyCard cards={filteredCompanies} />
      </div>
      <div className="companies__footer">
      
        <Footer />
        {/* <footer className = "d-block" >
        <p className = "text-center" > ©Copyright 2021 </p> 
        </footer> */}
      </div>
    </div>
  );
}

export default Companies;
