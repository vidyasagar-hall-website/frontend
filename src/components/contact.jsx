import React from "react";
import './contact.css';
import { faPhone, faEnvelope, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = (props) => {
  return (
    <div >
      <section clas className="header-contact"></section>

<section className="contact">
<div className="content-contact">
<h2>Contact Us</h2>
</div>
<div className="container-contact">
<div className="contactInfo">
  <div className="box">
    <div className="icon"><FontAwesomeIcon icon={faMapMarker} /></div>
    <div className="text">
      <h3>Address</h3>
      <p>IIT Kharagpur, West Bengal</p>
    </div>
  </div>

  <div className="box">
    <div className="icon"><FontAwesomeIcon icon={faPhone} /></div>
    <div className="text">
      <h3>Phone</h3>
      <p>+91 1234 567 890</p>
    </div>
  </div>

  <div className="box">
    <div className="icon"> <FontAwesomeIcon icon={faEnvelope} /></div>
    <div className="text">
      <h3>Email</h3>
      <p>vsh.iitkgp@gmail.com</p>
    </div>
  </div>
</div>
<div className="contactForm">
  <form >
    <h2>Send Message</h2>
    <div className="inputBox">
      <input type="text" required />
      <span>Full Name</span>
    </div>
    <div className="inputBox">
      <input type="email" required />
      <span>Email</span>
    </div>
    <div className="inputBox">
      <textarea name="" id="" cols="30" rows="10" required></textarea>
      <span>Type your Message...</span>
    </div>
    <div className="inputBox">
      <input type="submit" value="Send" className="send_but" />
    </div>
  </form>
</div>
</div>
</section>


    </div>
  )
}
