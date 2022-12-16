import { SkillData } from "../../data";
import { getLevelWidth } from "./Skill.util";

interface Props extends SkillData { }

const Skill = ({ name, level }: Props) => (
  <div className="row skill">
    <div className="col-5 col-md-3 name align-self-center">
      {name}
    </div>
    <div className="col-7 col-md-9 align-self-center">
      <span className="level" style={{ width: getLevelWidth(level) }} />
    </div>
  </div>
);

export default Skill;
