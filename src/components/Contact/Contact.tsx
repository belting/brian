import React from "react";
import "./Contact.css";
import he from "he";
import MailIcon from "@material-ui/icons/Mail";
import LocationOnIcon from "@material-ui/icons/LocationOn";

// Html entities to deter bots
const email = he.decode('&#x62;&#x65;&#x6C;&#x74;&#x69;&#x6E;&#x67;&#x30;&#x31;&#x40;&#x67;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x63;&#x6F;&#x6D;');
const emailLink = he.decode('&#x6D;&#x61;&#x69;&#x6C;&#x74;&#x6F;&#x3A;&#x62;&#x65;&#x6C;&#x74;&#x69;&#x6E;&#x67;&#x30;&#x31;&#x40;&#x67;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x63;&#x6F;&#x6D;');

const Contact: React.FC = () => (
  <section id="contact">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3>Do you want to connect or just say hello? Send me a message!</h3>
          <ul>
            <li>
              <MailIcon />
              <a href={emailLink} target="_blank" rel="noopener noreferrer">{email}</a>
            </li>
            <li>
              <LocationOnIcon />
              <span>Bothell, WA</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
