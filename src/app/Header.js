import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="navigation">
          <li><Link className="navItem" activeClassName="navItemActive" to='/'>Home</Link></li>
          <li><Link className="navItem" activeClassName="navItemActive" to='/gallery'>Public Gallery</Link></li>
          <li><Link className="navItem" activeClassName="navItemActive" to='/works'>All Works</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
