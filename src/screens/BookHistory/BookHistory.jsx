import React from 'react';
import styles from './BookHistory.module.css';
import BookDetails from '../../components/BookDetails/BookDetails';

const BookHistory = () => {
  return (
    <div className={styles.container}>
      <h2>Book History</h2>
      <BookDetails />
      <div className={styles.bookLogs}></div>
    </div>
  );
};

export default BookHistory;
