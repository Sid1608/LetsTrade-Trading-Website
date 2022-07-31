import React,{useState,useEffect} from 'react'
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import firebase from 'firebase';
import { storage, db} from "../../../firebase";
import { Card, Input, Image, Header, Segment, Button } from 'semantic-ui-react'
import "./css/ProfitAndLoss.css"
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios"
import { uplodDocument } from '../../../redux/apiCalls';
function ProfitAndLoss({profitloss,id}) {
    const [images,setImages] = useState([]);
    // const [profitloss,setpl]=useState([])
    const [upload,setUpload]=useState([]);
    const [url, setUrl]=useState("");
    const user=useSelector(state=>state.user.currentUser);
    const isAdmin=user?._doc?.isAdmin;
  const currentCompany=useSelector((state) => state.company.currentCompany);

    const [progress,setProgress]=useState(0);
    const [image,setImage]=useState(null);
  const dispatch=useDispatch()

  
    const handleChange =(e)=>{ 
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };
    const AddImage = () => {
      var formData = new FormData();
      formData.append("ProfitAndLoss",image);
      uplodDocument(dispatch,"ProfitAndLoss",currentCompany._id,formData)

     
       
    }
   
   
    return (
        
        <div>
        <Segment>
          <h1>Profit And Loss</h1>
        {
            profitloss?.map((img,index)=>{
                return(
                <Image src={profitloss[index]}/>
                );
            })
        }
        </Segment>
        {
          isAdmin&&(<Segment>
        <progress className="imageupload__progress" value={progress} max="100" />
        <div>
          <input type="file" onChange={handleChange} />

          <Button className="imageupload__button" onClick={AddImage}>
            Upload
          </Button>
          <Button onClick={(e)=>{
              db.collection("companies").doc(id).update({
                  ProfitAndLoss:[]
              })
          }}>Remove All</Button>
        </div>
        </Segment>)

        }
        <br />
        
            
        </div>
    )
}

export default ProfitAndLoss
