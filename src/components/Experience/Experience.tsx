import React from 'react';
import "./Experience.css";

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
                <div className="col-3">

                </div>
                <div className="col-9">
                  <h2>{exp.company.name}</h2>
                  <p>{exp.company.dates}</p>
                </div>
              </div>
              {exp.positions.map((pos, j) => (
                <>
                  <div key={`${j}-1`} className="row position">
                    <div className="col-md-3 dates align-self-center">
                      {pos.dates}
                    </div>
                    <div className="col-md-9 align-self-center">
                      <h3>{pos.title}</h3>
                    </div>
                  </div>
                  <div key={`${j}-2`} className="row position-desc">
                    <div className="offset-md-3 col-md-9">
                      <ul>
                        {pos.bullets.map((b, k) => (
                          <li key={k}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
