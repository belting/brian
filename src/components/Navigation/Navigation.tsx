import { useState } from "react";
import "./Navigation.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { NavData } from "../../data";

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

  const wrapperClass = (isMenuOpen) ? "nav-wrapper open" : "nav-wrapper";
  const menuIcon = (isMenuOpen) ? <CloseIcon /> : <MenuIcon />;

  return (
    <nav id="nav">
      <div className={wrapperClass}>
        <div className="container">
          <button className="d-block d-md-none nav-toggle" onClick={toggleMenu}>
            {menuIcon}
          </button>
          <a className="name" href="#header" onClick={closeMenu}>Brian Elting</a>
          <ul>
            {items.map(({ id, title }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={closeMenu}>{title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
