import React,{useState,useEffect} from 'react'
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import firebase from 'firebase';
import { storage, db} from "../../../firebase";
import { Card, Input, Image, Header, Segment, Button } from 'semantic-ui-react'
import "./css/ProfitAndLoss.css"
function ProfitAndLoss({profitloss,id}) {
    const [images,setImages] = useState([]);
    // const [profitloss,setpl]=useState([])
    const [upload,setUpload]=useState([]);
    const [url, setUrl]=useState("");
    const [user,setUser]=useState(null);
    const [progress,setProgress]=useState(0);
    const [image,setImage]=useState(null);
    useEffect(() => {
      console.log(id);
     
      // if(id){
      //   db.collection("companies").doc(id).get()
      //   .then(snapshot => setpl(snapshot.data().ProfitAndLoss?snapshot.data().ProfitAndLoss:[]))
      // }
      
      let isLoggedIn = firebase.auth().onAuthStateChanged((isLoggedIn)=>{
        if(isLoggedIn){
            setUser(isLoggedIn);
            console.log(isLoggedIn)
            console.log("love")
        }
    });
    console.log(user);
      
  }, [])
    
    const handleChange =(e)=>{ 
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };
    const AddImage = () => {
      var formData = new FormData();
      formData.append("ProfitAndLoss",image);
     axios.post("http://localhost:8080/api/company/ProfitAndLoss",formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
        }
        }).then(response=>{
            console.log(response)
            }).catch(err=>{
            console.log(err);
            })
        alert("data added");
        // const uploadTask = storage.ref(`profitAndLoss/${id}${image.name}`).put(image);
        
        // uploadTask.on(
        //   "state_changed",
        //   (snapshot) => {
        //     const progress = Math.round(
        //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        //     );
        //     setProgress(progress);
        //   },
        //   (error) => {
        //     console.log(error);
        //     alert(error.message)
        //   },
        //   () => {
        //     storage
        //       .ref("profitAndLoss")
        //       .child(`${id}${image.name}`)
        //       .getDownloadURL()
        //       .then((url) => {
        //         setUrl(url);
        //         var documentRef = db.collection("companies").doc(id)

        //         documentRef.update({
        //            ProfitAndLoss: firebase.firestore.FieldValue.arrayUnion(url)
        //         });
        //         setProgress(0);
        //         setUrl("");
        //         setImage(null)
               
        //       });
        //   }
        // );
        alert("added")
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
          user&&(<Segment>
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
