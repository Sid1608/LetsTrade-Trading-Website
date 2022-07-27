import React, {  useState, useEffect } from 'react'
import { db} from "../../firebase";
import { Input, Button, Divider, Menu } from 'semantic-ui-react'
import { Navigate,useLocation } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingWhatsApp from 'react-floating-whatsapp'
import firebase from 'firebase';
import './css/CompanyDetail.css'
import Footer from "../../components/footer/Footer"
import Price from '../../components/companies/menu_items/price'
import About from '../../components/companies/menu_items/About'
import AnnualReport from '../../components/companies/menu_items/AnnualReport'
import Shareholdings from '../../components/companies/menu_items/Shareholdings'
import Financials from '../../components/companies/menu_items/Financials';
import Balancesheet from "../../components/companies/menu_items/Balancesheet"
import ProfitAndLoss from "../../components/companies/menu_items/ProfitAndLoss"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import axios from "axios";
// import emailjs from "emailjs-com"
const unsplash = `https://images.unsplash.com/photo-1516434233442-0c69c369b66d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`

const menu_items = [
  ["Price","price"],
  ["About","about"],
  ["Financial Snapshot","financials"],
  ["Shareholdings","shareholding"],
  ["Balancesheet","balancesheet"],
  ["Profit And Loss","ProfitAndLoss"],
  ["Annual Report","AnnualReport"]
  
]
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
      height:500,
      backgroundColor: theme.palette.background.paper,
      // border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: 'white'
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



/**********************************Function Starts here */
function CompanyDetail(props){
  // const classes = useStyles();
    // console.log(props);
  const classes=useStyles();
  const location=useLocation();
  const [modalStyle]=useState(getModalStyle);
  const [open, setOpen]=useState(false);
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [category,setCategory]=useState("Family Office")
  const [mobileNo,setMobileNo]=useState(0);
  const [quantity,setQuantity] = useState(0)
  const [user,setUser]=useState(null); 
  const [password,setPassword]=useState("");
  const [option,setOption]=useState("Buy");
  const [bs,setbs]=useState("Buy");
  
  // const [finaloption,setFinalOption]=useState("");
  const [state, setstate] = useState({
        error:false,
        company: "",
        activeMenuItem: "",
        id:null

  })
  const handleClick=()=>{
    window.location.href="https://api.whatsapp.com/send?phone=918824885175&text=Hi%20we%20need%20help%20regarding%20something"
  }
  const [companyLogo,setCompanylogo]=useState("");
    useEffect(()=>{
            let currLoc=location.pathname;
            console.log(currLoc)
            const arr = currLoc.split("/");
            const slug = arr[2]
            console.log(slug);
            axios.get(`http://localhost:8081/api/company/${slug}`)
              .then(response=>{
                console.log(response.data.company);

                setstate({
                  error: false,
                  company: response.data.company,
                  activeMenuItem: 'Price',
                  id:response.data.compamy._id
                })
              })
              .catch(err=>{
                console.log(err);
              })
            // db.collection("companies").orderBy('timestamp',"desc").onSnapshot((snapshot) => {
            //     snapshot.docs.map((doc) =>{
            //       if(doc.id===slug){
            //         console.log(doc.data())
            //         console.log(doc.data().Balancesheets)
            //         setstate({
            //           error: false,
            //           company: doc.data(),
            //           activeMenuItem: 'Price',
            //           id:doc.id
            //         })
                   
            //       }
            //     })
            //     console.log(state.company.Balancesheets)
              
            // });
            let isLoggedIn = firebase.auth().onAuthStateChanged((isLoggedIn)=>{
              if(isLoggedIn){
                  setUser(isLoggedIn);
                  console.log(isLoggedIn)
                 
              }
          });
          console.log(user);
            
    }, [])

       const handleMenuItemChange = item => {
            setstate({...state,
                activeMenuItem: item
            })
          
        }
        // console.log(state.company);
        
        const submitDetails=(event)=>{
          event.preventDefault();
          // console.log(option);
          
          // setFinalOption(option);
          // let x=`"Sid`
          console.log(username)
          window.location.href=`https://api.whatsapp.com/send?phone=919892477213&text=Name%20=%20${username}%20Category%20=%20${category}%20MobileNo%20=%20${mobileNo}%20Email%20=%20${email}%20wants%20to%20${bs}%20${quantity}%20Quantity%20of%20Company%20=%20${state.company["Name"]}`
          // console.log(finaloption);
          
         

          // if(option=="Buy"){
          //   // console.log({option});
          //   // console.log({finaloption});
          //   // setFinalOption("");
          //   emailjs.sendForm('service_zfnm2b2','template_d36y0mg',event.target,'user_SfAS6Dpb7qXQLxqIjTtrY')
          //   .then((result)=>{
          //       console.log(result.text);
          //   }, (error)=>{
          //       console.log(error.text);
          //   });
          //   event.target.reset();

          //   setOption("");

          // }else {
            
          //   console.log(option);
          //   console.log(username)
          //   console.log(email);
          //   console.log(mobileNo);
          //   console.log(quantity);
          //   emailjs.sendForm('service_zfnm2b2','template_d36y0mg',event.target,'user_SfAS6Dpb7qXQLxqIjTtrY')
          //   .then((result)=>{
          //       console.log(result.text);
          //   }, (error)=>{
          //       console.log(error.text);
          //   });
          //   event.target.reset();
            
          //   setOption("");
          // }
          // setOption("");
          
      }
        const { error, company, activeMenuItem } =state
            if (error) {
                return (
                    <Navigate to="/companies" exact />
                )
            }
        return (
            
            <div id="company-detail-container">
            
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
                    value={state.company.Name}
                    className="inputButon info_companyName_input"
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
                    onChange={(e)=>{
                      setCategory(e.target.value)
                    }}
                    className="inputButton info_Category_input"
                  >
                    <option value="Family Office">Family Office</option>
                    <option value="Wealth Management">Wealth Management</option>
                    <option value="Investment Advisory Firms">Investment Advisory Firms</option>
                    <option value="Equity Broking Houses">Individual</option>
                    <option value="HNI's">HNI's</option>
                    <option value="UHNI's">UHNI's</option>
                  </select>
                </div>
                <div className="div_info info_buysell">
                  <label for="cars">Buy Or Sell</label>
                  <br />
                  <select
                    id="cars"
                    name="bs"
                    // className="inputButton"
                    onChange={(e)=>{
                      setbs(e.target.value)
                    }}
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

                {/* <Input
                       className="inputButton"
                       placeholder="option"
                       // type="hidden"
                       name="option"
                       value={option}
                     /> */}

                <Button
                  type="submit"
                  style={{marginTop:"10px"}}
                  class="btn btn-dark btn-lg download-button"
                >
                  Send Details
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
              <div id="company-detail-content">
                  <div id="company-detail-header">
                      <div id="company-name-header-left">
                          <h1 id="company-header-name">
                              {state.company["Name"]}
                          </h1>
                          <div id="company-header-category">
                              {state.company["category"]}
                          </div>
                          <div id="company-header-button">
                           {/* {
                              user&&(
                                <div><Button
                                  size={'large'}
                                  color={'green'}
                                  onClick={()=>{
                                    setOption("Buy")
                                    setOpen(true)
                                   
                                    }}
                              >
                                  Buy
                              </Button>
                              <Button
                                  size={'large'}
                                  color={'green'}
                                  onClick={()=>{
                                    setOption("Sell")
                                    setOpen(true)
                                    
                                    }}
                              >
                                  Sell
                              </Button></div>)
                           } */}
                              {/* <a   href="https://api.whatsapp.com/send?phone=918824885175&text=Hi%20we%20need%20help%20regarding%20something" class="applyinfo-btn">start chat </a> */}
                              <Button
                                  size={'large'}
                                  color={'green'}
                                  onClick={()=>{
                                    setOption("Sell")
                                    setOpen(true)
                                    
                                    }}
            
                                 style={{color:"white"}}
                              >
                                  Invest
                              </Button>
                          </div>
                      </div>
                      <div id="company-name-header-right">
                          <img src={state.company.logo}  style={{height:"200px", width:"200px" , objectFit:"contain", borderRadius:"50%"}} alt="" />
                          {/* <Avatar alt="Remy Sharp" src={state.company.logo} style={{objectFit:"cover"}} className={classes.large} /> */}
                          {/* <Image size={"medium"} src={state.company.logo} className={classes.large}/> */}
                      </div>
                  </div>
                  <Divider/>
                  
                  
                  <Menu  id="menu" inverted pointing>
                      {menu_items.map((item, index) => {
                          return (
                              <Menu.Item
                                  key={index}
                                  name={item[0]}
                                  active={activeMenuItem === item[0]}
                                  href={`${"#"}${item[1]}`}
                                  // onClick={()=>{handleMenuItemChange(item[0])}}
                              />
                          )
                      })}
                  </Menu>
                  
                  <div>
                      <div id="price" style={{padding:"20px"}}><Price company={state.company} id={state.id}/></div>
                      <div id="about" style={{padding:"20px"}}><About company={state.company} id={state.id}/></div>
                      <div id="financials" style={{padding:"20px"}}><Financials company={state.company} id={state.id}/></div>
                      <div id="shareholding" style={{padding:"20px"}}><Shareholdings company={state.company} id={state.id}/></div>
                      <div id="balancesheet" style={{padding:"20px", width:"1000px"}}><Balancesheet balancesheets={state?.company?.Balancesheets} id={state.id}/></div>
                      <div id="ProfitAndLoss" style={{padding:"20px", width:"1000px"}}>
                             <ProfitAndLoss profitloss={state?.company?.ProfitAndLoss} id={state.id}/>
                      </div>
                      <div id="AnnualReport" style={{padding:"20px", width:"1000px"}}><AnnualReport pdfs={state?.company?.AnnualReports} id={state.id}/></div>
                                
                  </div>
                  <div className="footer">
                  <Footer/> 

                  </div>
                  


                 
                  {/* {activeMenuItem === 'Price' && <Price company={state.company} id={state.id}/>}
                  {activeMenuItem === 'About' && <About company={state.company} id={state.id}/>}
                  {activeMenuItem === 'Financial Snapshot' && <Financials company={state.company} id={state.id}/>}
                  {activeMenuItem === 'Shareholdings' && <Shareholdings company={state.company} id={state.id}/>}
                  {activeMenuItem === 'Balancesheet' && <Balancesheet company={state.company} id={state.id}/>}
                  {activeMenuItem === 'Profit And Loss' && <ProfitAndLoss company={state.company} id={state.id}/>}
                  {activeMenuItem === 'Annual Report' && <AnnualReport company={state.company} id={state.id}/>} */}
                  
              </div>
              <div className="footer-sticky-popup">

                <ul className="footer-live-chat">
                    <li className="whatsup-block">
                          <FloatingWhatsApp  avatar={window.location.origin + '/profile_pics/rushi_bhanushali.png'} phoneNumber="919892477213" accountName="Rushi Bhanushali" statusMessage="Enter the message and our team will get back to you in 24 hours." darkMode="True"/>
                        {/* <a href="https://api.whatsapp.com/send?phone=919137718552&amp;text=Hi%20Rushi,">
                            <Image  size="mini" src="https://cdn-icons-png.flaticon.com/512/1384/1384055.png" alt="whatsup"/>
                        </a> */}
                    </li>
                
                </ul>
            </div>
          </div>
        );
    
}

export default CompanyDetail;
