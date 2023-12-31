import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import IsPrivate from '../IsPrivate/IsPrivate';
import { AuthContext } from '../../context/auth.context';

const Navbar = () => {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    logOutUser();
    navigate('/');
  };

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
            <IsPrivate>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/reader/new" className="nav-link active">
                    Registration
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/reader" className="nav-link active">
                    Reader Search
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/book/new" className="nav-link active">
                    Add Books
                  </Link>
                </li>
              </ul>
            </IsPrivate>
            <span className={styles.login}>
              {isLoggedIn ? (
                <button
                  type="button"
                  className={styles.logoutBtn}
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" className={styles.loginLink}>
                  Login
                </Link>
              )}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
