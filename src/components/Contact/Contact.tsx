import React from "react";
import "./Contact.css";
import he from "he";
import MailIcon from "@material-ui/icons/Mail";

interface IContact {
  body: string[];
  cta: string;
  emailUrlEncoded: string;
}

interface IContactProps {
  contact: IContact;
}

const Contact: React.FC<IContactProps> = ({ contact }) => (
  <section id="contact">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 contact-col">
          <p>
            {contact.body.map((line, i) => (
              <React.Fragment key={i}>
                {(i > 0) ? <br /> : null}
                {line}
              </React.Fragment>
            ))}
          </p>
          <a href={he.decode(contact.emailUrlEncoded)} target="_blank" rel="noopener noreferrer"> <MailIcon />{contact.cta}</a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
