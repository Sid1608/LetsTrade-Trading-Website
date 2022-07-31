import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import firebase from "firebase";
import { storage, db } from "../../../firebase";
import { Input, Image, Segment, Button } from "semantic-ui-react";
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { updateCompany, uplodDocument } from "../../../redux/apiCalls";

function AnnualReport({ pdfs, id }) {
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");
  const dispatch=useDispatch()
  const [image, setImage] = useState(null);
  const currentCompany=useSelector((state) => state.company.currentCompany);

  /********************************UseEffect*/
  const user=useSelector(state=>state.user.currentUser);
  const isAdmin=user?._doc?.isAdmin;
  /********************************Methods */
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    var formData = new FormData();
    formData.append("AnnualReports",image);
    uplodDocument(dispatch,"uploadAnnualReports",currentCompany._id,formData)
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
        {currentCompany?.AnnualReports?.map((report, index) => {
          return (
            <a href={report} target="_blank">
              <h4 style={{ margin: "50px", marginLeft: "10px" }}>
                <Image
                  align="left"
                  size="mini"
                  src="https://cdn-icons-png.flaticon.com/512/136/136522.png"
                />
                {"click here"}
              </h4>
            </a>
          );
          {
            /* return (<h1>{report.report}.{report.caption}</h1>) */
          }
        })}
        {/* <progress className="imageupload__progress" value={progress} max="100" /> */}
      </Segment>

      
      {isAdmin && (
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
