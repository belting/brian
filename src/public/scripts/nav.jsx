'use strict';

class NavigationList extends React.Component { // eslint-disable-line no-unused-vars
  render() {
    let createItem = item => {
      return <li><a href={'#' + item.id}>{item.title}</a></li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>
  }
}

class Navigation extends React.Component { // eslint-disable-line no-unused-vars
  render() {
    return (
      <NavigationList items={this.props.items} />
    );
  }
}
