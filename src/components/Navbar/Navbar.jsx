import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-primary fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="/book-icon.svg" alt="Bootstrap" width="30" height="24" />
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/reader/new" className="nav-link active">
                  Registration
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/book/new" className="nav-link active">
                  Add Books
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
