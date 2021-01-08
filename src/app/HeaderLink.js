import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Header.css';

class HeaderLink extends Component {
  render () {
    if (this.props.display) {
      return (
        <NavLink className="navItem" activeClassName="navItemActive" to={this.props.to}>{this.props.children}</NavLink>
      );
    } else {
      return <div></div>;
    }
  }
}

export default HeaderLink;
