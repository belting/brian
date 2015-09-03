'use strict';

import React from 'react/addons';

class NavigationList extends React.Component { // eslint-disable-line no-unused-vars
  render() {
    return <ul>
      {this.props.items.map(item => {
        return <li key={item.id}><a href={'#' + item.id}>{item.title}</a></li>
      })}
    </ul>
  }
}

export class Navigation extends React.Component {
  render() {
    return (
      <div className="nav-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a className="name" href="#header">Brian Elting</a>
            </div>
            <div className="col-md-9">
              <NavigationList items={this.props.items} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
