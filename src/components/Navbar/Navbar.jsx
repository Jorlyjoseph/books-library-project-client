import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Library</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
