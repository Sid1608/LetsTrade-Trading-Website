import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import { Button, Header, Input, TextArea, Form } from "semantic-ui-react";
import "./ContactUs.css";
import FloatingWhatsApp from 'react-floating-whatsapp'

const contact_buttons = [
  {
    icon: "phone",
    text: "+91 9892477213",
    action: "call",
  },
  {
    icon: "envelope",
    text: "contact@iriscapital.in",
    action: "mail",
  },
  {
    icon: "map marker alternate",
    text: "Chromium Jogeshwari Maharastra 400076",
    action: "locate",
  },
];

const contact_form_fields = [{}, {}, {}];

function ContactUs(props) {
  const action = (a) => {};
  const [state, setstate] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
   
  }, []);
  const submitDetails=(event)=>{
    event.preventDefault();
   
    window.location.href=`https://api.whatsapp.com/send?phone=919892477213&text=Name%20=%20${name}%20Email%20=%20${email}%20Message%20${message}%20`
   

  }
  return (
    <div className="contact">
    <div className="footer-sticky-popup">

<ul className="footer-live-chat">
    <li className="whatsup-block">
          <FloatingWhatsApp 
          avatar={window.location.origin + '/profile_pics/rushi_bhanushali.png'}
          phoneNumber="919892477213" accountName="Rushi Bhanushali" statusMessage="Enter the message and our team will get back to you in 24 hours." darkMode="True"/>
        {/* <a href="https://api.whatsapp.com/send?phone=919137718552&amp;text=Hi%20Rushi,">
            <Image  size="mini" src="https://cdn-icons-png.flaticon.com/512/1384/1384055.png" alt="whatsup"/>
        </a> */}
    </li>

</ul>
</div>
      <div id="contact-container" >
        <div id="contact-box">
          <div id="contact-inner-box-left" >
            <div id="left-header">
              <Header id="get-a-quote">Get a Quote</Header>
            </div>
            <div id="contact-message">
              Fill up the form and our team will get back to you in 24 hours.
            </div>
            <div  id="contact-buttons-container" >
              <div id="contact-buttons">
                {contact_buttons.map((item, index) => {
                  return (
                    <Button
                      key={index}
                      className={"contact-button"}
                      icon={item.icon}
                      fluid={false}
                      basic
                      color="black"
                      labelPosition="left"
                      content={item.text}
                      size="big"
                      onClick={() => {
                        action(item.action);
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div  id="contact-inner-box-right">
            <div id="contact-form-container">
              <div id="contact-form">
                <Header id="input-name-header" className="input-header">
                  Name:
                </Header>
                <Input
                  fluid
                  // value={name}
                  placeholder="Your full name..."
                  id="input-name"
                  onChange={(e)=>{
                    setName(e.target.value)
                  }}
                  required
                />

                <Header id="input-email-header" className="input-header">
                  Email:
                </Header>
                <Input
                  fluid
                  placeholder="Your Email..."
                  id="input-email"
                  // onChange={this.onProjectNameChange.bind(this)}
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                  required
                />
                <Header id="input-message-header" className="input-header">
                  Message:
                </Header>
                <Form>
                  <TextArea placeholder="Tell us more" id="input-message" onChange={(e)=>{
                    setMessage(e.target.value)
                  }}
                  required/>
                </Form>
                <Button
                  type="submit"
                  color="black"
                  size="large"
                  floated="right"
                  id="submit-form"
                  onClick={submitDetails}
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="footer" style={{marginLeft:"0px"}}>
            <Footer />
      </div>
      
    </div>
  );
}

export default ContactUs;
