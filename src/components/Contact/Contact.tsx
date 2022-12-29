import MailIcon from "@mui/icons-material/Mail";
import he from "he";
import { Fragment, useEffect, useState } from "react";

import { ContactData } from "../../data";

interface Props extends ContactData {}

const Contact = ({ body, cta, emailUrlEncoded }: Props) => {
  const [emailUrl, setEmailUrlUrl] = useState("");

  useEffect(() => {
    setEmailUrlUrl(he.decode(emailUrlEncoded));
  }, [emailUrlEncoded]);

  return (
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
                  {i > 0 ? <br /> : null}
                  {line}
                </Fragment>
              ))}
            </p>
            <a href={emailUrl} target="_blank" rel="noopener noreferrer">
              {" "}
              <MailIcon />
              {cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
