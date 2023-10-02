import React, { useEffect, useState } from 'react';
import styles from './BookHistory.module.css';
import BookDetails from '../../components/BookDetails/BookDetails';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookHistory = () => {
  const { bookId } = useParams();
  const [details, setDetails] = useState({});

  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:5005/api/books/${bookId}`
    }).then((bookDetails) => {
      setDetails(bookDetails.data);
    });

    axios({
      method: 'get',
      url: `http://localhost:5005/api/logs/book/${bookId}`
    }).then((logs) => {
      setLogs(logs.data);
      console.log(logs.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h2>Book History</h2>
      <BookDetails details={details} />
      {logs.map(({ _id, time, transaction_type }) => (
        <div className={styles.bookLogsContainer} key={_id}>
          <div className={styles.bookLogs}>
            <div className={styles.info}>
              <div className={styles.label}>Date</div>
              <div>{time}</div>
            </div>

            <div className={styles.info}>
              <div className={styles.label}>Reader</div>
              <div>Jorly J</div>
            </div>

            <div>
              {transaction_type === 'lent' ? (
                <span className="badge text-bg-danger">Borrowed</span>
              ) : (
                <span className="badge text-bg-success">Returned</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookHistory;