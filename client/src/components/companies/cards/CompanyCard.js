import React, { useState, useEffect } from "react";
import "./CompanyCard.css";
import DeleteIcon from "@material-ui/icons/Delete";
import Card from "@mui/material/Card";
import { Input } from "semantic-ui-react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useSelector,useDispatch } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";



import { Button, CardActionArea, CardActions } from "@mui/material";
import { deleteCompany } from "../../../redux/apiCalls";
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    height: 540,
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 'white'
  },
  root: {
    display: "flex",
    "& > *": {
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

function CompanyCard({ cards }) {
  
  const classes = useStyles();
  const [category,setCategory]=useState("Family Office")
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [bs,setbs]=useState("Buy");
  const [password, setPassword] = useState("");
  const [option, setOption] = useState("");
  const [finaloption, setFinalOption] = useState("");
  const [company, setCompany] = useState("");
  console.log(cards);
  const user=useSelector(state=>state.user.currentUser);
  const dispatch=useDispatch();
  const isAdmin=user?._doc?.isAdmin;
 


  const submitDetails = (event) => {
    event.preventDefault();
    setFinalOption(option);
    console.log(username);
    window.location.href=`https://api.whatsapp.com/send?phone=919892477213&text=Name%20=%20${username}%20Category%20=%20${category}%20MobileNo%20=%20${mobileNo}%20Email%20=%20${email}%20wants%20to%20${bs}%20${quantity}%20Quantity%20of%20Company%20=%20${company}`
    setOption("");
  };

  
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <div className="modal_comment">
            <h2>Buy Or Sell</h2>
          </div>

          <div className="modalDesign">
            <div className="modal_form">
              <form className="RequestQuote" onSubmit={submitDetails}>
                <div className="div_info info_companyName">
                  <label>Company Name</label>
                  <br />
                  <Input
                    placeholder="Company Name"
                    type="text"
                    // className="inputButton"
                    value={company}
                    className="inputButton info_companyName_input"
                    name="CompanyName"
                    // onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <div className="div_info info_category">
                  <label for="cars">Choose Category:</label>
                  <br />
                  <select
                    id="cars"
                    name="cars"
                    // className="inputButton"
                    placeholder="option"
                    onChange={(e)=>{
                      setCategory(e.target.value)
                    }}
                    className="inputButton info_Category_input"
                  >
                    <option value="Buy">Family Office</option>
                    <option value="Sell">Wealth Management</option>
                    <option value="Buy">Investment Advisory Firms</option>
                    <option value="Sell">Individual</option>
                    <option value="Buy">HNI's</option>
                    <option value="Sell">UHNI's</option>
                  </select>
                </div>
                <div className="div_info info_buysell">
                  <label for="cars">Buy Or Sell</label>
                  <br />
                  <select
                    id="cars"
                    name="cars"
                    // className="inputButton"
                    onChange={(e)=>{
                      setbs(e.target.value)
                    }}
                    placeholder="option"
                    className="inputButton info_buysell_input"
                  >
                    <option value="Buy">Buy</option>
                    <option value="Sell">Sell</option>
                  </select>
                </div>
                <div className="div_info info_quantity">
                  <label for="cars">Quantity</label>
                  <br />
                  <Input
                    // className="inputButton"
                    placeholder="Quantity"
                    type="number"
                    // value={Q}
                    name="Quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                    className="inputButton info_quantity_input"
                    required
                  />
                </div>

                <div className="div_info info_name">
                  <label for="cars">Your Name*</label>
                  <br />
                  <Input
                    placeholder="Name"
                    type="text"
                    // value={username}
                    name="username"
                    // className="inputButton"
                    className="inputButton info_name_input"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="div_info info_email">
                  <label for="cars">Email*</label>
                  <br />
                  <Input
                    // className="inputButton"
                    placeholder="Email"
                    type="email"
                    // value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="inputButton info_email_input"
                    required
                  />
                </div>
                <div className="div_info info_phoneNumber">
                  <label for="cars">Phone Number</label>
                  <br />
                  <Input
                    placeholder="Mobile No"
                    type="tel"
                    name="MobileNo"
                    // className="inputButton"
                    // value={password}
                    onChange={(e) => setMobileNo(e.target.value)}
                    className="inputButton info_phoneNumber_input"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  class="btn btn-dark btn-lg download-button"
                >
                  Send Details
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
      <div class="row">
      
        {cards.map((company ) => {
          return (
            
            <div class=" col-lg-3 col-md-4 col-sm-12  company_card">
              <Card  sx={{ maxWidth: 345 ,minWidth:100}} className="card" >
                <CardMedia
                  component="img"
                  height="140"
                  style={{ objectFit: "contain" }}
                  image={`http://localhost:8081/static/${company.CompanyLogo.substring(8)}`}
                  alt="green iguana"
                />
                
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {company.CompanyName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {company.Category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>
                      <strong>Buy Price</strong>:{company.BuyPrice}{" "}
                      <strong>Sell Price</strong>: {company.SellPrice}
                    </p>
                  </Typography>
                </CardContent>

                <CardActions style={{ alignItems: "center" }}>
                  <a
                    className="btn btn-success"
                    onClick={() => {
                      setOption("Sell");
                      setOpen(true);
                      setCompany(company.CompanyName);
                    }}
                  >
                    Invest
                  </a>
                  <a
                    href={`/companies/${company._id}`}
                    className="btn btn-dark"
                    style={{ marginRight: "15px" }}
                  >
                    Explore
                  </a>
                  {isAdmin && (
                    <button
                      className="deletebtn"
                      onClick={(e) => {
                        deleteCompany(dispatch,company._id)
                    
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  )}
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CompanyCard;
// href="https://api.whatsapp.com/send?phone=918824885175&text=Hi%20we%20need%20help%20regarding%20something" className="btn btn-outline-success" target="_blank"
