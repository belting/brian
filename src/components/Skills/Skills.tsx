import { SkillData } from "../../data";
import Skill from "./Skill";
import "./Skills.css";

interface Props {
  items: SkillData[];
}

const Skills = ({ items }: Props) => (
  <section id="skills">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Technical Skills</h1>
        </div>
      </div>
      {items.map((skill) => (
        <Skill key={skill.name} {...skill} />
      ))}
    </div>
  </section>
);

export default Skills;
