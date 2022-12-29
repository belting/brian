import { SkillData } from "../../data";
import styles from "./Skill.module.css";
import { getLevelWidth } from "./Skill.util";

interface Props extends SkillData {}

const Skill = ({ name, level }: Props) => (
  <div className={`row ${styles.skill}`}>
    <div className={`col-5 col-md-3 align-self-center ${styles.name}`}>
      {name}
    </div>
    <div className="col-7 col-md-9 align-self-center">
      <span className={styles.level} style={{ width: getLevelWidth(level) }} />
    </div>
  </div>
);

export default Skill;
