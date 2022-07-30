import { Card, Input, Image, Header, Button, Embed } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';
import React, { Component, useState, useEffect } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FormData from 'form-data'
import axios from 'axios'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { storage, db} from "../../../firebase";
import firebase from "firebase";
import "./AddCompany.css";

function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  }));


function AddCompany() {
    const classes=useStyles();
    const [modalStyle]=useState(getModalStyle);
    const [open, setOpen]=useState(false);
    const [user,setUser]=useState(null);
    const [url, setUrl]=useState("");
    const [companyDetails,setCompanyDetails]=useState({
        companyName:"",ISIN:"",Quote:"",logo:null,category:""
    });
    const handleFileUpload =(e)=>{
     
        
        if(e.target.files[0]){
        
            setCompanyDetails({ ...companyDetails, logo: e.target.files[0]});
          
        }
    
  };

    // const handleFileUpload = async (e) => {
    //     const file = e.target.files[0];
    //     setCompanyDetails({ ...companyDetails, logo: file });
    //   };
     let name,value
     const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        console.log(e)
        setCompanyDetails({...companyDetails,[name]:value})

     }
    const submitDetails=()=>{
      var formData = new FormData();
      formData.append("CompanyLogo",companyDetails.logo);
      formData.append("CompanyName",companyDetails.companyName);
      formData.append("Category",companyDetails.category);
     axios.post("http://localhost:8080/api/company/addCompany",formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
  }).then(response=>{
       console.log(response)
     }).catch(err=>{
       console.log(err);
     })
        alert("data added");
        setOpen(false);
    }


  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="RequestQuote"
            method="post"
            onSubmit={submitDetails}
          >
            <div className="modalHeader">
              <center>
                <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Items
          </Typography>
              </center>
            </div>
            <Input
              placeholder="Company Name"
              type="text"
              value={companyDetails.companyName}
              name="companyName"
              className="inputButton"
              onChange={handleInputs}
              required
            />
            <Input
              placeholder="ISIN NO"
              type="text"
              value={companyDetails.ISIN}
              name="ISIN"
              className="inputButton"
              onChange={handleInputs}
              required
            />
            <Input
              placeholder="QOUTE"
              type="text"
              value={companyDetails.Quote}
              name="Quote"
              className="inputButton"
              onChange={handleInputs}
              required
            />
            <Input
              type="file"
              // label="Image"
              // name="company_logo"
              // accept=".jpeg, .png, .jpg"
              // value={companyDetails.logo}
              onChange={handleFileUpload}
              required
            />
            <Input
              placeholder="Category"
              type="text"
              value={companyDetails.category}
              name="category"
              className="inputButton"
              onChange={handleInputs}
              required
            />
            
            <Button
                  type="submit"
                  style={{marginTop:"10px"}}
                  class="btn btn-dark btn-lg download-button"
                ><AddCircleIcon/>Add Company</Button>
          </form>
        </div>
      </Modal>
      <Button className="addButton_style" onClick={()=>{setOpen(true)}}><AddCircleIcon/> Add Companies</Button>

    </div>
  );
}

export default AddCompany;
