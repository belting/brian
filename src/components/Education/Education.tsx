import Image from "next/image";

import { EducationData } from "../../data";
import styles from "./Education.module.css";
import { getEducationImage } from "./Education.util";

interface Props {
  items: EducationData[];
}

const Education = ({ items: education }: Props) => (
  <section id="education" className={styles.education}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Education</h1>
        </div>
      </div>
      <div className="row row-eq-height">
        {education.map(({ degree, imageKey, imageAlt, school, year }) => (
          <div key={degree} className={`col-md-6 ${styles.eduCol}`}>
            <div className={styles.eduItem}>
              <Image src={getEducationImage(imageKey)} alt={imageAlt} />
              <h2>{degree}</h2>
              <p>
                {school.map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
                Class of {year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
