import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => (
  <nav className={classes.navbar}>
    <h1>Math Magicians</h1>
    <ul>
      <li>
        <Link to="/"> Home </Link>
      </li>
      <div className={classes.vl} />
      <li>
        <Link to="/calculator"> Calculator </Link>
      </li>
      <div className={classes.vl} />
      <li>
        <Link to="/quotes"> Quote </Link>
      </li>
    </ul>
  </nav>
);
export default Navbar;
