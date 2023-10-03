import axios from 'axios';
import styles from './LentBook.module.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const LentBook = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [details, setDetails] = useState({});
  const [readers, setReaders] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    axios({
      method: 'post',
      url: `http://localhost:5005/api/logs/transaction`,
      data: {
        bookId: bookId,
        readerId: selectedUser,
        date: '2003-01-11',
        type: 'lent'
      }
    }).then(() => {
      navigate(`/book/${bookId}/history`);
    });
  };

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:5005/api/readers`
    }).then((bookReaders) => {
      setReaders(bookReaders.data);
    });

    axios({
      method: 'get',
      url: `http://localhost:5005/api/books/${bookId}`
    }).then((bookDetails) => {
      setDetails(bookDetails.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lent Book</h2>
      <div className={styles.innerContainer}>
        <div className={styles.nameValuePair}>
          <div className={styles.label}>Title</div>
          <div>{details.title}</div>
        </div>
        <div className={styles.nameValuePair}>
          <div className={styles.label}>Author</div>
          <div>{details.author}</div>
        </div>
        <div className={styles.nameValuePair}>
          <div className={styles.label}>Reader</div>
          <div>
            <select
              className="form-select"
              onChange={(event) => {
                setSelectedUser(event.target.value);
              }}
            >
              {readers.map((reader) => (
                <option value={reader._id} key={reader._id}>
                  {reader.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.btnContainer}>
          <button type="button" className="btn btn-link">
            Cancel
          </button>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LentBook;
