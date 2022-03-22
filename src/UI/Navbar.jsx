import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => (
  <nav className={classes.navbar}>
    <h1>Math Magicians</h1>
    <ul>
      <li>Home</li>
      <div className={classes.vl} />
      <li>Calculator</li>
      <div className={classes.vl} />
      <li>Quote</li>
    </ul>
  </nav>
);
export default Navbar;
