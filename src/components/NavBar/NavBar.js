import React from 'react';

import './NavBar.css';

const NavBar = props =>(
  <header className="navbar">
    <nav className="navbar_navigation">
      <div></div>
      <div className="navbar_logo"><a href="/">THE LOGO</a></div>
      <div className="spacer" />
      <div className="navbar_navigation-items">
        <ul>
          <li><a href="/">House Overview</a></li>
          <li><a href="/">Submit Points</a></li>
          <li><a href="/">User</a></li>
        </ul>
      </div>
    </nav>
  </header>

);

export default NavBar
