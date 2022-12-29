import { ExperienceData as ExperienceItemData } from "../../data";
import Company from "./Company";
import styles from "./Experience.module.css";
import Position from "./Position";

interface Props {
  items: ExperienceItemData[];
}

const Experience = ({ items }: Props) => (
  <section id="experience" className={styles.experience}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Experience</h1>
        </div>
      </div>
      {items.map(({ company, positions }) => (
        <div key={company.name} className="row">
          <div className="col">
            <div className={styles.expItem}>
              <Company {...company} />
              {positions.map((position) => (
                <Position key={position.title} {...position} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
