import React, { useEffect, useState } from 'react';
import styles from './BookHistory.module.css';
import BookDetails from '../../components/BookDetails/BookDetails';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookHistory = () => {
  const { bookId } = useParams();
  const [details, setDetails] = useState({});
  const url = `http://localhost:5005/api/books/${bookId}`;

  useEffect(() => {
    axios({
      method: 'get',
      url
    }).then((bookDetails) => {
      setDetails(bookDetails.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h2>Book History</h2>
      <BookDetails details={details} />
      <div className={styles.bookLogsContainer}>
        <div className={styles.bookLogs}>
          <div className={styles.info}>
            <div className={styles.label}>Date</div>
            <div>10.10.22</div>
          </div>

          <div className={styles.info}>
            <div className={styles.label}>Reader</div>
            <div>Jorly J</div>
          </div>

          <div>
            <span className="badge text-bg-success">Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookHistory;
