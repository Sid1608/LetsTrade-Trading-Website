import React,{useState,useEffect} from 'react';
import { Image,Input,Button,Segment} from 'semantic-ui-react'
import "./css/price.css"
import { storage, db} from "../../../firebase";
import axios from "axios";
import firebase from "firebase"

function Price({company,id}) {

        const [bp,setbp]=useState(0.00);
        const [sp,setsp]=useState(0.00)

        const [user,setUser]=useState(null);
        useEffect(() => {
            
                let isLoggedIn = firebase.auth().onAuthStateChanged((isLoggedIn)=>{
                    if(isLoggedIn){
                        setUser(isLoggedIn);
                        console.log(isLoggedIn)
                        console.log("love")
                    }
                });
                console.log(user);
            
        }, [])
    
       // useEffect(() => {
        //     if(db.collection("companies").doc(id).BuyPrice){
        //         setbp(db.collection("companies").doc(id).BuyPrice)
        //     }
        //     if(db.collection("companies").doc(id).SellPrice){
        //         setsp(db.collection("companies").doc(id).SellPrice)
        //     }
            
        // }, []);
        const updateBuyingPrice=()=>{
            axios.patch(`http://localhost:8080/api/company/updateBuyPrice/${id}`)
                .then(response=>{
                    console.log(response)
                })
                .catch(err=>{
                    console.log(err)
                })
            // db.collection("companies").doc(id).update({
            //     BuyPrice: bp
            // })
        }
        const updateSellingPrice=()=>{
            axios.patch(`http://localhost:8080/api/company/updateSellPrice/${id}`)
                .then(response=>{
                    console.log(response)
                })
                .catch(err=>{
                    console.log(err)
                })
        }
        return (
            <div id="company-price-container" cellspacing={0} cellpadding={0} style={{width:"955px"}}>
            <Segment>



            <div class="section-title text-justify">
                <h2 data-aos="fade-up" class="aos-init aos-animate">Price</h2>
            </div>
            <h3 class="price_main">
              {company.BuyPrice} - {company.SellPrice}           </h3>
            <p class="price_details">Buy Price - Sell Price</p>
            {/* <p class="price_date">Updated on
                <b>
                    18 Oct, 2021                </b>
            </p> */}
              {/* <h1>Price Details</h1> 
              <p>Buy Price.{company.BuyPrice}</p>
              <p>Sell Price.{company.SellPrice}</p> */}
              {/* <p><span><h4>Buy Price</h4>:{Prices[0]}</span> </p> */}
              {/* <h4>Buy Price</h4> <h6> {buyPrice}</p> */}
              {/* <p><h4>Sell Price</h4>: {Prices[1]}</p> */}
              

                 {/* <div> */}
                        
                    {/* </div> */}
                   {/* <table >
                        <tr>
                            <td><strong>Buy Price</strong></td>
                            <td>{company.BuyPrice}</td>
                           

                        </tr>
                        <tr>
                            <td><strong>Sell Price</strong></td>
                            <td>{company.SellPrice}</td>

                        </tr>
                      
                    </table> */}

              
                    </Segment>
                
                   
             { user&&(<div>
              < Input

                  type="text"
                  value={bp}
                  onChange={(e)=>{
                      setbp(e.target.value)
                  }}
              />
              <Button onClick={updateBuyingPrice}>Update Buying Price</Button>
              < Input

                type="text"
                value={sp}
                onChange={(e)=>{
                    setsp(e.target.value)
                }}
                />
              <Button onClick={updateSellingPrice}>Update Selling Price</Button>
              </div>)}
              
            {/* </div> */}
            </div>
           
        );

}

export default Price
