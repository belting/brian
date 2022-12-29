import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";

import { NavData } from "../../data";
import styles from "./Navigation.module.css";

interface Props {
  items: NavData[];
}

const Navigation = ({ items }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const wrapperClass = isMenuOpen
    ? `${styles.navWrapper} ${styles.open}`
    : styles.navWrapper;
  const menuIcon = isMenuOpen ? <CloseIcon /> : <MenuIcon />;

  return (
    <nav id="nav" className={styles.nav}>
      <div className={wrapperClass}>
        <div className={`container ${styles.container}`}>
          <button
            className={`d-block d-md-none ${styles.navToggle}`}
            onClick={toggleMenu}
          >
            {menuIcon}
          </button>
          <Link className={styles.name} href="/#header" onClick={closeMenu}>
            Brian Elting
          </Link>
          <ul>
            {items.map(({ id, title }) => (
              <li key={id}>
                <Link href={`/#${id}`} onClick={closeMenu}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
