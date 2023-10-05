import React, { useContext, useEffect, useState } from 'react';
import styles from './BookHistory.module.css';
import BookDetails from '../../components/BookDetails/BookDetails';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import * as dayjs from 'dayjs';
import { API_URL } from '../../config';
import { AuthContext } from '../../context/auth.context';

const BookHistory = () => {
  const { bookId } = useParams();
  const [details, setDetails] = useState({});

  const [logs, setLogs] = useState([]);
  const { getAuthHeader } = useContext(AuthContext);

  useEffect(() => {
    axios({
      method: 'get',
      url: `${API_URL}/api/books/${bookId}`,
      headers: getAuthHeader()
    }).then((bookDetails) => {
      setDetails(bookDetails.data);
    });

    axios({
      method: 'get',
      url: `${API_URL}/api/logs/book/${bookId}`,
      headers: getAuthHeader()
    }).then((logs) => {
      setLogs(logs.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h2>Book History</h2>
      <BookDetails details={details} />
      {logs.map(({ _id, time, transaction_type, reader_id }) => (
        <div className={styles.bookLogsContainer} key={_id}>
          <div className={styles.bookLogs}>
            <div className={styles.info}>
              <div className={styles.label}>Date</div>
              <div>{dayjs(time).format('DD MMM YYYY @ HH:mm')}</div>
            </div>

            <div className={styles.info}>
              <div className={styles.label}>Reader</div>
              <div>{reader_id.name}</div>
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
