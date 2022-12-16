import { Fragment } from "react";
import "./Contact.css";
import he from "he";
import MailIcon from "@material-ui/icons/Mail";
import { ContactData } from "../../data";

interface Props extends ContactData { }

const Contact = ({ body, cta, emailUrlEncoded }: Props) => (
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
            {body.map((line, i) => (
              <Fragment key={i}>
                {(i > 0) ? <br /> : null}
                {line}
              </Fragment>
            ))}
          </p>
          <a href={he.decode(emailUrlEncoded)} target="_blank" rel="noopener noreferrer"> <MailIcon />{cta}</a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
