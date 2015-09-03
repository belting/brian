'use strict';

import React from 'react/addons';

class NavigationList extends React.Component { // eslint-disable-line no-unused-vars
  render() {
    return <ul>
        {this.props.items.map(item => {
          return (
            <li key={item.id}>
              <a href={'#' + item.id} onClick={this.props.onItemClick.bind(null, item)}>{item.title}</a>
            </li>
          );
        })}
      </ul>
  }
}

export class Navigation extends React.Component {constructor(props) {
    super(props);
    this.state = {
      isScrolled: false
    };
    this.headerItem = {
      id: 'header'
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll.bind(this));
    this.onScroll();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }
  getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
  onItemClick(item, event) {
    event.preventDefault();
    this.scrollTo(document.getElementById(item.id).offsetTop - this.nav.offsetHeight);
  }
  scrollTo(offsetTop = 0) {
    this.$body.animate({
      scrollTop: offsetTop
    }, '500', 'swing');
  }
  onScroll() {
    let isScrolled = this.getScrollTop() >= this.header.offsetHeight - this.nav.offsetHeight;
    this.setState({isScrolled});
  }
  render() {
    return (
      <div className={'nav-wrapper' + (this.state.isScrolled
        ? ' scrolled'
        : '')}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a className="name" href="#header" onClick={this.onItemClick.bind(this, this.headerItem)}>Brian Elting</a>
            </div>
            <div className="col-md-9">
              <NavigationList items={this.props.items} onItemClick={this.onItemClick.bind(this)}/>
            </div>
          </div>
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
