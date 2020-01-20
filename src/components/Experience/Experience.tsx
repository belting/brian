import React from 'react';
import "./Experience.css";

interface IExperienceItem {
  date: string;
  title: string;
  company: string;
  bullets: string[];
}

interface IExperienceProps {
  experience: IExperienceItem[];
}

const Experience: React.FC<IExperienceProps> = ({ experience }) => (
  <section id="experience">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h1>Experience</h1>
        </div>
      </div>
      {experience.map((exp, i) => (
        <div key={i} className="row">
          <div className="col-sm-3">
            <span className="date">{exp.date}</span>
          </div>
          <div className="col-sm-9">
            <div className="timeline"></div>
            <h2>{exp.title}</h2>
            <h3>{exp.company}</h3>
            <ul>
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
