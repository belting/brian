import { PositionData } from "../../data";
import styles from "./Position.module.css";

interface Props extends PositionData {}

const Position = ({ dates, title, bullets }: Props) => (
  <>
    <div className={`row ${styles.position}`}>
      <div className={`col-md-3 align-self-center ${styles.dates}`}>
        {dates}
      </div>
      <div className="col-md-9 align-self-center">
        <h3>{title}</h3>
      </div>
    </div>
    <div className={`row ${styles.description}`}>
      <div className="offset-md-3 col-md-9">
        <ul>
          {bullets.map((bullet, key) => (
            <li key={key}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  </>
);

export default Position;
