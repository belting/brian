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
        <div className="col-12">
          <h1>Education</h1>
        </div>
      </div>
      <div className="row row-eq-height">
        {education.map((item, i) => (
          <div key={i} className="col-md-6 edu-col">
            <div className="edu-item">
              <img className="scale-image" src={getImage(item.imageKey)} alt={item.imageAlt} />
              <h2>{item.degree}</h2>
              <p>{item.school.map((line, j) => (
                <span key={j}>
                  {line}<br />
                </span>
              ))}
                Class of {item.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
