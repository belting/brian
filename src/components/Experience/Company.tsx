import Image from "next/image";

import { CompanyData } from "../../data";
import styles from "./Company.module.css";
import { getCompanyImage } from "./Company.util";

interface Props extends CompanyData {}

const Company = ({ imageKey, name, dates }: Props) => (
  <div className={`row ${styles.company}`}>
    <div className={`col-3 align-self-center ${styles.logoCol}`}>
      <Image src={getCompanyImage(imageKey)} alt={name} />
    </div>
    <div className="col-9 align-self-center">
      <h2>{name}</h2>
      <p>{dates}</p>
    </div>
  </div>
);

export default Company;
