import React from "react";
import "./Skills.css";

interface ISkill {
  name: string;
  level: number;
}

interface ISkillsProps {
  skills: ISkill[][];
}

const Skills: React.FC<ISkillsProps> = ({ skills }) => (
  <section id="skills">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h1>Technical Skills</h1>
        </div>
      </div>
      <div className="row">
        {skills.map((col, i) => (
          <div key={i} className="col-sm-6">
            <ul>
              {col.map((skill, j) => (
                <li key={j}>
                  <span className="skill">{skill.name}</span>
                  <span className={`level-${skill.level}`} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;