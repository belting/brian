import React, { Component } from "react";
import "./Navigation.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from '@material-ui/icons/Close';

interface IItem {
  id: string;
  title: string;
}

interface INavigationProps {
  items: IItem[];
}

interface INavigationState {
  isMenuOpen: boolean;
}

class Navigation extends Component<INavigationProps, INavigationState> {
  constructor(props: INavigationProps) {
    super(props);

    this.state = {
      isMenuOpen: false
    };

    this.onNavItemClick = this.onNavItemClick.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  onNavItemClick() {
    if (this.state.isMenuOpen) {
      this.toggleMenu();
    }
  }

  toggleMenu() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  render() {
    let navWrapperClass = "nav-wrapper";

    if (this.state.isMenuOpen) {
      navWrapperClass = `${navWrapperClass} open`;
    }

    const menuIcon = (this.state.isMenuOpen)
      ? <CloseIcon />
      : <MenuIcon />;

    return (
      <nav id="nav">
        <div className={navWrapperClass}>
          <div className="container">
            <button className="d-block d-md-none nav-toggle" onClick={this.toggleMenu}>
              {menuIcon}
            </button>
            <a className="name" href="#header" onClick={this.onNavItemClick}>Brian Elting</a>
            <ul>
              {this.props.items.map(item => {
                return (
                  <li key={item.id}>
                    <a href={'#' + item.id} onClick={this.onNavItemClick}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;