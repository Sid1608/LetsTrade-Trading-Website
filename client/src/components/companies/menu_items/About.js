import React, { useState, useEffect } from "react";
import { Segment, Button } from "semantic-ui-react";
import "./css/about.css";
import { db } from "../../../firebase";
import firebase from "firebase";
import axios from "axios";
import { useSelector,useDispatch } from 'react-redux';
import { updateCompany } from "../../../redux/apiCalls";
function About() {

  const [about, setAbout] = useState("");
  const [id, setId] = useState(null);
  const user=useSelector(state=>state.user.currentUser);
  const dispatch=useDispatch()
  const currentCompany=useSelector((state) => state.company.currentCompany);
  const isAdmin=user?._doc?.isAdmin;

  useEffect(() => {
    console.log(user);
  }, []);

  const updateAbout = () => {
    updateCompany(dispatch,"updateAboutUs",currentCompany._id,{
      about:about
    });
    // axios
    //   .patch(`http://localhost:8081/api/company/updateAboutUs/${company._id}`)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // db.collection("companies").doc(id).update({
    //   About: about,
    // });
  };

  const handleAbout = (e) => {
    setAbout(e.target.value);
  };

  return (
    <div id="company-about-container" style={{ width: "955px" }}>
      <Segment>
        <h1>About the Company</h1>
        <div dangerouslySetInnerHTML={{ __html: currentCompany.AboutUs }}></div>
      </Segment>

      {isAdmin && (
        <div>
          <textarea
            placeholder="About Company"
            type="text"
            value={about}
            name="about"
            className="inputButton form-control"
            onChange={handleAbout}
            rows="8"
          />
          <Button onClick={updateAbout}>Update</Button>
        </div>
      )}
    </div>
  );
}

export default About;
