import React, { useState, useEffect } from "react";
import { Segment, Button } from "semantic-ui-react";
import "./css/about.css";
import { db } from "../../../firebase";
import firebase from "firebase";
import axios from "axios";
import { useSelector } from 'react-redux';
function About({ company }) {
  console.log(company);
  const [about, setAbout] = useState("");
  const [id, setId] = useState(null);
  const user=useSelector(state=>state.user.currentUser);
  const isAdmin=user?._doc?.isAdmin;

  useEffect(() => {
    console.log(user);
  }, []);

  const updateAbout = () => {
    console.log(company._id);
    axios
      .patch(`http://localhost:8081/api/company/updateAboutUs/${company._id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
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
        <div dangerouslySetInnerHTML={{ __html: company.About }}></div>
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
