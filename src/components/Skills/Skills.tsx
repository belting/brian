import React from "react";
import "./Skills.css";

const MAX_LEVELS = 5;
const ONE_HUNDRED_PERCENT = 100;

interface ISkill {
  name: string;
  level: number;
}

interface ISkillsProps {
  skills: ISkill[];
}

const getLevelWidth = (level: number) => {
  const percent = level / MAX_LEVELS * ONE_HUNDRED_PERCENT;
  return `${percent}%`;
}

const Skills: React.FC<ISkillsProps> = ({ skills }) => (
  <section id="skills">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Technical Skills</h1>
        </div>
      </div>
      {skills.map((skill, i) => (
        <div className="row skill" key={i}>
          <div className="col-5 col-md-3 name align-self-center">
            {skill.name}
          </div>
          <div className="col-7 col-md-9 align-self-center">
            <span className="level" style={{ width: getLevelWidth(skill.level) }} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;