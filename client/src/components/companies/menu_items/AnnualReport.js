import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import firebase from "firebase";
import { storage, db } from "../../../firebase";
import { Input, Image, Segment, Button } from "semantic-ui-react";
import axios from "axios"

function AnnualReport({ pdfs, id }) {
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");
  const [Reports, setReports] = useState("");
  const [report, setReport] = useState("");
  const [user, setUser] = useState(null);
  const [url, setUrl] = useState("");
  const [image, setImage] = useState(null);

  /********************************UseEffect*/
  useEffect(() => {
    console.log(id);
    let isLoggedIn = firebase.auth().onAuthStateChanged((isLoggedIn) => {
      if (isLoggedIn) {
        setUser(isLoggedIn);
      }
    });
    console.log(user);
  }, []);

  /********************************Methods */
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
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
    const uploadTask = storage.ref(`pdfs/${id}${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        // Error function ...
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("pdfs")
          .child(`${id}${image.name}`)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            var documentRef = db.collection("companies").doc(id);
            documentRef.update({
              AnnualReports: firebase.firestore.FieldValue.arrayUnion({
                caption: caption,
                report: url,
              }),
            });
            setUrl("");
            setCaption("");
            setReport("");
            setProgress(0);
            setImage(null);
          });
      }
    );
    // alert("added")
  };



  const handleDelete = () => {
    db.collection("companies").doc(id).update({
      AnnualReports: [],
    });
  };


  /********************************Return sgtatarem*/
  return (
    <div>


      <Segment>
        <h1>Annual Reports</h1>
        {pdfs?.map((report, index) => {
          return (
            <a href={report.report} target="_blank">
              <h4 style={{ margin: "50px", marginLeft: "10px" }}>
                <Image
                  align="left"
                  size="mini"
                  src="https://cdn-icons-png.flaticon.com/512/136/136522.png"
                />
                {report.caption}
              </h4>
            </a>
          );
          {
            /* return (<h1>{report.report}.{report.caption}</h1>) */
          }
        })}
        {/* <progress className="imageupload__progress" value={progress} max="100" /> */}
      </Segment>

      
      {user && (
        <Segment>
          <progress
            className="imageupload__progress"
            value={progress}
            max="100"
          />
          <Input
            placeholder="Enter a caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <div>
            <input type="file" onChange={handleChange} />
            <Button
              className="imageupload__button"
              disabled={!caption}
              onClick={handleUpload}
            >
              Upload
            </Button>
            <Button
              className="imageupload__button"
              disables={!image}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>

          <br />
        </Segment>


      )}
    </div>
  );
}

export default AnnualReport;
