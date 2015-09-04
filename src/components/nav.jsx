'use strict';

import React from 'react/addons';

class NavigationList extends React.Component { // eslint-disable-line no-unused-vars
  render() {
    return (
      <ul className="nav-menu">
        {this.props.items.map(item => {
          return (
            <li key={item.id}>
              <a href={'#' + item.id} onClick={this.props.onItemClick.bind(null, item)}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

class NavigationToggle extends React.Component {render() { // eslint-disable-line no-unused-vars
    return (
      <a className='hidden-md hidden-lg nav-toggle' href="" onClick={this.props.onToggleClick.bind(null)}>
        <i className="material-icons md-36">&#xE5D2;</i>
      </a>
    );
  }
}

export class Navigation extends React.Component {constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
      isOpen: false,
      isScreenSmall: false
    };
    this.headerItem = {
      id: 'header'
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll.bind(this));
    this.onScroll();

    window.addEventListener('resize', this.onResize.bind(this));
    this.onResize();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll.bind(this));
    window.removeEventListener('resize', this.onResize.bind(this));
  }
  getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
  getWindowWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  }
  onItemClick(item, event) {
    event.preventDefault();
    this.setState({
      isOpen: false
    });
    this.scrollTo(document.getElementById(item.id).offsetTop - this.nav.offsetHeight);
  }
  onToggleClick(event) {
    event.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  scrollTo(offsetTop = 0) {
    this.$body.animate({
      scrollTop: offsetTop
    }, '500', 'swing');
  }
  onResize() {
    const SCREEN_SM_MAX = 991;
    this.setState({
      isScreenSmall: this.getWindowWidth() <= SCREEN_SM_MAX
    });
    this.onScroll();
  }
  onScroll() {
    let isScrolled = this.getScrollTop() >= this.header.offsetHeight - this.nav.offsetHeight;
    this.setState({isScrolled});
  }
  render() {
    let navWrapperClass = 'nav-wrapper';
    if (this.state.isScrolled) {
      navWrapperClass += ' scrolled';
    }
    if (this.state.isOpen) {
      navWrapperClass += ' open';
    }

    let navMenu = <NavigationList items={this.props.items} onItemClick={this.onItemClick.bind(this)}/>;
    let navMenuFull;
    let navMenuSmall;
    if (this.state.isScreenSmall) {
      navMenuSmall = navMenu;
    } else {
      navMenuFull = navMenu;
    }

    return (
      <div className={navWrapperClass}>
        {navMenuSmall}
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a className="name" href="#header" onClick={this.onItemClick.bind(this, this.headerItem)}>Brian Elting</a>
            </div>
            <div className="col-md-9">
              {navMenuFull}
            </div>
          </div>
        </div>
        <NavigationToggle onToggleClick={this.onToggleClick.bind(this)}/>
      </div>
    );
  }
  get $body() {
    if (!this._body) {
      this._body = $('html, body');
    }
    return this._body
  }
  get header() {
    if (!this._header) {
      this._header = document.getElementById('header');
    }
    return this._header;
  }
  get nav() {
    if (!this._nav) {
      this._nav = document.getElementById('nav');
    }
    return this._nav;
  }
}
