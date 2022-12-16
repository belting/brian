import { PositionData } from "../../data";

interface Props extends PositionData { }

const Position = ({ dates, title, bullets }: Props) => (
  <>
    <div className="row position">
      <div className="col-md-3 dates align-self-center">
        {dates}
      </div>
      <div className="col-md-9 align-self-center">
        <h3>{title}</h3>
      </div>
    </div>
    <div className="row position-desc">
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
