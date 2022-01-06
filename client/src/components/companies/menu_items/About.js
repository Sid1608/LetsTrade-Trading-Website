import React, { useState, useEffect } from "react";
import {Segment, Button } from "semantic-ui-react";
import "./css/about.css";
import {db } from "../../../firebase";
import firebase from "firebase";
import axios from "axios";
function About({ company}) {
  const [about, setAbout] = useState("");
  const [id, setId] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // db.collection("companies").onSnapshot((snapshot) => {
    //   snapshot.docs.map((doc) => {
    //     if (doc.data().Name === company.Name) {
    //       setId(doc.id);
    //     }
    //   });
    // });

    let isLoggedIn = firebase.auth().onAuthStateChanged((isLoggedIn) => {
      if (isLoggedIn) {
        setUser(isLoggedIn);
        console.log(isLoggedIn);
      }
    });
    console.log(user);
  }, []);

  const updateAbout = () => {
    console.log(id);
    axios.patch(`http://localhost:8080/api/company/updateAboutUs/${company._id}`)
                .then(response=>{
                    console.log(response)
                })
                .catch(err=>{
                    console.log(err)
                 })   
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

      {user && (
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
