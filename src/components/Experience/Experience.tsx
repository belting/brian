import React from 'react';
import "./Experience.css";
import bcgdvLogo from "../../images/bcgdv.jpg";
import shareInteractiveLogo from "../../images/share-interactive.jpg";
import zantlerLogo from "../../images/zantler.jpg";

const BCGDV_IMAGE_KEY = "bcgdv";
const SHARE_INTERACTIVE_IMAGE_KEY = "share-interactive";
const ZANTLER_IMAGE_KEY = "zantler";

interface ICompany {
  name: string;
  dates: string;
  imageKey: string;
}

interface IPosition {
  dates: string;
  title: string;
  bullets: string[];
}

interface IExperienceItem {
  company: ICompany;
  positions: IPosition[];
}

interface IExperienceProps {
  experience: IExperienceItem[];
}

const getImage = (imageKey: string) => {
  switch (imageKey) {
    case BCGDV_IMAGE_KEY:
      return bcgdvLogo;
    case SHARE_INTERACTIVE_IMAGE_KEY:
      return shareInteractiveLogo;
    case ZANTLER_IMAGE_KEY:
      return zantlerLogo;
    default:
      throw new Error(`Image with key ${imageKey} not found`);
  }
}

const Experience: React.FC<IExperienceProps> = ({ experience }) => (
  <section id="experience">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Experience</h1>
        </div>
      </div>
      {experience.map((exp, i) => (
        <div key={i} className="row">
          <div className="col">
            <div className="exp-item">
              <div className="row company">
                <div className="col-3 logo-col align-self-center">
                  <img src={getImage(exp.company.imageKey)} alt={exp.company.name} />
                </div>
                <div className="col-9 align-self-center">
                  <h2>{exp.company.name}</h2>
                  <p>{exp.company.dates}</p>
                </div>
              </div>
              {exp.positions.map((pos, j) => (
                <React.Fragment key={j}>
                  <div className="row position">
                    <div className="col-md-3 dates align-self-center">
                      {pos.dates}
                    </div>
                    <div className="col-md-9 align-self-center">
                      <h3>{pos.title}</h3>
                    </div>
                  </div>
                  <div className="row position-desc">
                    <div className="offset-md-3 col-md-9">
                      <ul>
                        {pos.bullets.map((b, k) => (
                          <li key={k}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
