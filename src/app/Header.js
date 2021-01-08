import React from 'react';
import HeaderLink from './HeaderLink.js'
import './Header.css';

const Header = ({isAuthenticated}) => {
  return (
    <header>
      <nav>
        <ul className="navigation">
          <li><HeaderLink to='/' display="true">Home</HeaderLink></li>
          <li><HeaderLink to='/gallery' display={isAuthenticated()}>Public Gallery</HeaderLink></li>
          <li><HeaderLink to='/works' display="true">All Works</HeaderLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
