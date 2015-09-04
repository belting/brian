'use strict';

import React from 'react/addons';

class NavigationList extends React.Component { // eslint-disable-line no-unused-vars
  render() {
    return (
      <ul>
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
      <a className='hidden-md hidden-lg nav-toggle' href="" onClick={this.props.onToggleClick}>
        <i className="material-icons md-36">&#xE5D2;</i>
      </a>
    );
  }
}

export class Navigation extends React.Component {constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
      isOpen: false
    };
    this.headerItem = {
      id: 'header'
    };

    this.onResizeOrScroll = this.onResizeOrScroll.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onResizeOrScroll);
    window.addEventListener('resize', this.onResizeOrScroll);
    this.onResizeOrScroll();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onResizeOrScroll);
    window.removeEventListener('resize', this.onResizeOrScroll);
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
  onResizeOrScroll() {
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

    return (
      <div className={navWrapperClass}>
        <div className='container'>
          <a className="name" href="#header" onClick={this.onItemClick.bind(null, this.headerItem)}>Brian Elting</a>
          <NavigationList items={this.props.items} onItemClick={this.onItemClick}/>
          <NavigationToggle onToggleClick={this.onToggleClick}/>
        </div>
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
