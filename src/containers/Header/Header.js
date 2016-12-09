import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-header">
          <img src={logo} className="Header-logo" alt="logo" />
          <h2>Robert Nickels</h2>
        </div>
      </div>
    );
  }
}

export default Header;
