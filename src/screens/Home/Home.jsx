import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <div className="input-group input-group-lg">
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>

          <input type="text" className="form-control" />
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="filter"
            value="title"
          />
          <label className="form-check-label">Title</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="filter"
            value="author"
          />
          <label className="form-check-label">Author</label>
        </div>
      </div>
      <div className={styles.bookListContainer}></div>
    </div>
  );
};

export default Home;
