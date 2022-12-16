import { CompanyData } from "../../data";
import { getCompanyImage } from "./Company.util";

interface Props extends CompanyData { }

const Company = ({ imageKey, name, dates }: Props) => (
  <div className="row company">
    <div className="col-3 logo-col align-self-center">
      <img src={getCompanyImage(imageKey)} alt={name} />
    </div>
    <div className="col-9 align-self-center">
      <h2>{name}</h2>
      <p>{dates}</p>
    </div>
  </div>
);

export default Company;
