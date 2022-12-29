import Image from "next/image";

import { HeaderData } from "../../data";
import profileImage from "../../images/be-profile.jpg";
import styles from "./Header.module.css";

interface Props extends HeaderData {}

const Header = ({ name, title, summary }: Props) => (
  <header id="header" className={styles.header}>
    <div className="container">
      <div className="row">
        <div className="col-lg-5 d-none d-lg-block align-self-center">
          <Image
            className={styles.profileImage}
            src={profileImage}
            alt="Brian Elting"
          />
        </div>
        <div className="col-lg-6 align-self-center">
          <div>
            <Image
              className={`d-inline-block d-lg-none ${styles.profileImage}`}
              src={profileImage}
              alt="Brian Elting"
            />
            <div className={styles.title}>
              <h1>{name}</h1>
              <h2>{title}</h2>
            </div>
          </div>
          <p>{summary}</p>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
