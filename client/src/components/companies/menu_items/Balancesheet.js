import React,{useState,useEffect} from 'react'
import {Navigate} from "react-router-dom";
import { storage, db} from "../../../firebase";
import firebase from "firebase"
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { Card, Input, Image, Header, Segment, Button } from 'semantic-ui-react'
import axios from "axios"
import { useSelector,useDispatch } from 'react-redux';
import { uplodDocument } from '../../../redux/apiCalls';

function Balancesheet({ balancesheets,id}) {
    const [images,setImages] = useState([]);
    
    // const [balancesheets,setbs]=useState([])
    const [upload,setUpload]=useState([]);
    const [url, setUrl]=useState("");
    const [progress,setProgress]=useState(0);
    const [image,setImage]=useState(null);
  const dispatch=useDispatch()
    
    const user=useSelector(state=>state.user.currentUser);
  const isAdmin=user?._doc?.isAdmin;
  const currentCompany=useSelector((state) => state.company.currentCompany);
    
    const handleChange =(e)=>{ 
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };
    const AddImage = () => {
      if(image){
        var formData = new FormData();
        formData.append("Shareholdings",image);
      uplodDocument(dispatch,"uploadAnnualReports",currentCompany._id,formData)
      
       
        return <Navigate to={`${"/companies/"}${id}`} />

        }else{
          alert("NO Image selected")
        }
    }
   
    return (
        
        <div>
        
            <Segment>
            
            <h1>Balancesheet</h1>
            {
                balancesheets?.map((img,index)=>{
                    console.log("debug2");
                    return(
                      <div>
                        {/* {alert("hello")} */}
                        <Image src={img}/>
                        {/* <Button onClick={(id)=>{
                          setbs(prevNotes => {
                          return prevNotes.filter((noteItem, index) => {
                            return index !== id;
                          });
                        });
                        }}>delete</Button> */}
                        <br/>
                        
                      </div>
                    );
                })
            }
            </Segment>
            {isAdmin&&
            (<Segment>
              <progress className="imageupload__progress" value={progress} max="100" />
              <div>
                <input type="file" onChange={handleChange} />
                {/* <Button onClick={AddImage}>Add Balancesheets</Button> */}
                <Button className="imageupload__button" onClick={AddImage}>
                  Upload
                </Button>
                <Button onClick={(e)=>{
                    db.collection("companies").doc(id).update({
                        Balancesheets:[]
                    })
                }}>Drop</Button>
              </div>
        
              <br />
              </Segment>)}
        
            
        </div>
    )
}

export default Balancesheet
