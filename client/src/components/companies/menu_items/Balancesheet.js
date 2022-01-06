import React,{useState,useEffect} from 'react'
import {Redirect} from "react-router-dom";
import { storage, db} from "../../../firebase";
import firebase from "firebase"
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { Card, Input, Image, Header, Segment, Button } from 'semantic-ui-react'


function Balancesheet({ balancesheets,id}) {
    const [images,setImages] = useState([]);
    const [user,setUser]=useState(null); 
    // const [balancesheets,setbs]=useState([])
    const [upload,setUpload]=useState([]);
    const [url, setUrl]=useState("");
    const [progress,setProgress]=useState(0);
    const [image,setImage]=useState(null);
    useEffect(() => {
      console.log(id);
     
      // if(id){
      //   db.collection("companies").doc(id).get()
      //   .then(snapshot => setbs(snapshot.data().Balancesheets?snapshot.data().Balancesheets:[]))
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
      if(image){
        var formData = new FormData();
      formData.append("Shareholdings",image);
     axios.post("http://localhost:8080/api/company/UploadShareHoldings",formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
        }
        }).then(response=>{
            console.log(response)
            }).catch(err=>{
            console.log(err);
            })
        alert("data added");
        // const uploadTask = storage.ref(`balanceSheets/${id}${image.name}`).put(image);
        //  /**Accessing storage in firebase */
        // uploadTask.on(
        //   "state_changed",
        //   (snapshot) => {
        //     // progress function ...
        //     const progress = Math.round(
        //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        //     );
        //     setProgress(progress);
        //   },
        //   (error) => {
        //     // Error function ...
        //     console.log(error);
        //     alert(error.message)
        //   },
        //   () => {
        //     // complete function ...
        //     storage
        //       .ref("balanceSheets")
        //       .child(`${id}${image.name}`)
        //       .getDownloadURL()
        //       .then((url) => {
        //         setUrl(url);
        //         var documentRef = db.collection("companies").doc(id)

        //         documentRef.update({
        //            Balancesheets: firebase.firestore.FieldValue.arrayUnion(url)
        //         });
        //         setProgress(0);
        //         setUrl("");
        //         setImage(null)
               
        //       });
        //   }
        // );
        // alert("added");
        return <Redirect to={`${"/companies/"}${id}`} />

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
            {user&&
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
