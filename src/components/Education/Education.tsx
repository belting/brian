import React from 'react';
import "./Education.css";
import osuLogo from '../../images/osu.png';
import uwLogo from '../../images/uw.png';

const OSU_IMAGE_KEY = "osu";
const UW_IMAGE_KEY = "uw";

interface IEducationItem {
  imageKey: string;
  imageAlt: string;
  degree: string;
  school: string[];
  year: string;
}

interface IEducationProps {
  education: IEducationItem[];
}

const getImage = (imageKey: string) => {
  switch (imageKey) {
    case OSU_IMAGE_KEY:
      return osuLogo;
    case UW_IMAGE_KEY:
      return uwLogo;
    default:
      throw new Error(`Image with key ${imageKey} not found`);
  }
}

const Education: React.FC<IEducationProps> = ({ education }) => (
  <section id="education">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h1>Education</h1>
        </div>
      </div>
      {education.map((item, i) => (
        <div key={i} className="row education-item">
          <div className="col-md-10 order-md-2 align-self-center">
            <h2>{item.degree}</h2>
            <p>{item.school.map((line, j) => (
              <span key={j}>
                {line}<br />
              </span>
            ))}
              {item.year}
            </p>
          </div>
          <div className="col-md-2 order-md-1 align-self-center">
            <img className="scale-image" src={getImage(item.imageKey)} alt={item.imageAlt} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
