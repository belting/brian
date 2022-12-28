import { ExperienceData as ExperienceItemData } from '../../data';
import Position from './Position';
import Company from './Company';

interface Props {
  items: ExperienceItemData[];
}

const Experience = ({ items }: Props) => (
  <section id="experience">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Experience</h1>
        </div>
      </div>
      {items.map(({ company, positions }) => (
        <div key={company.name} className="row">
          <div className="col">
            <div className="exp-item">
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
