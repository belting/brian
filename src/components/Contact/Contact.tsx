import React from "react";
import "./Contact.css";
import he from "he";
import MailIcon from "@material-ui/icons/Mail";

// Html entities to deter bots
const emailLink = he.decode('&#x6D;&#x61;&#x69;&#x6C;&#x74;&#x6F;&#x3A;&#x62;&#x65;&#x6C;&#x74;&#x69;&#x6E;&#x67;&#x30;&#x31;&#x40;&#x67;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x63;&#x6F;&#x6D;');

const Contact: React.FC = () => (
  <section id="contact">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 contact-col">
          <p>Do you want to connect or just say hello? <br /> Send me a message!</p>
          <a href={emailLink} target="_blank" rel="noopener noreferrer"> <MailIcon />email me</a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
