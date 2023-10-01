import React from 'react';
import styles from './BookDetails.module.css';

const BookDetails = () => {
  return (
    <div className={styles.bookDetails}>
      <div className={styles.detailsContainer}>
        <div className={styles.info}>
          <div className={styles.label}>Title</div>
          <div>Dracula</div>
        </div>
        <div className={styles.info}>
          <div className={styles.label}>Location</div>
          <div>B-12A</div>
        </div>
        <div className={styles.info}>
          <div className={styles.label}>Author</div>
          <div>Bram Stocker</div>
        </div>
        <div className={styles.info}>
          <div className={styles.label}>Category</div>
          <div>Horror</div>
        </div>
        <div className={styles.info}>
          <div className={styles.label}>Published</div>
          <div>1897</div>
        </div>
        <div className={styles.info}>
          <div className={styles.label}>Reader</div>
          <div>Jorly</div>
        </div>
      </div>

      <div className={styles.actionContainer}>
        <div className={styles.userActions}>
          <div>
            <i className="bi bi-clock-history"></i>
          </div>
          <div>
            <i className="bi bi-pencil-square"></i>
          </div>
          <div>
            <i className="bi bi-trash3"></i>
          </div>
        </div>

        <div className={styles.bookActions}>
          <button type="button" className="btn btn-primary">
            Lent
          </button>
          <span className="badge text-bg-success">Available</span>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
