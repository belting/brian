import React, { Component } from "react";
import "./Navigation.css";
import MenuIcon from "@material-ui/icons/Menu";

interface IItem {
  id: string;
  title: string;
}

interface INavigationProps {
  items: IItem[];
}

class Navigation extends Component<INavigationProps> {
  render() {
    let navWrapperClass = 'nav-wrapper';

    return (
      <nav id="nav" className="scrolled">
        <div className={navWrapperClass}>
          <div className='container'>
            <a className="name" href="#header">Brian
                            Elting</a>
            <ul>
              {this.props.items.map(item => {
                return (
                  <li key={item.id}>
                    <a href={'#' + item.id}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
            <button className='d-block d-md-none'>
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;