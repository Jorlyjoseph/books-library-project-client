import axios from 'axios';
import styles from './LentBook.module.css';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as dayjs from 'dayjs';
import { API_URL } from '../../config';
import { AuthContext } from '../../context/auth.context';

const LentBook = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [details, setDetails] = useState({});
  const [readers, setReaders] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const { getAuthHeader } = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    axios({
      method: 'post',
      url: `${API_URL}/api/logs/transaction`,
      data: {
        bookId: bookId,
        readerId: selectedUser,
        date: dayjs().format('YYYY-MM-DDTHH:mm'),
        type: 'lent'
      },
      headers: getAuthHeader()
    }).then(() => {
      navigate(`/book/${bookId}/history`);
    });
  };

  useEffect(() => {
    axios({
      method: 'get',
      url: `${API_URL}/api/readers`,
      headers: getAuthHeader()
    }).then((bookReaders) => {
      setReaders(bookReaders.data);
    });

    axios({
      method: 'get',
      url: `${API_URL}/api/books/${bookId}`,
      headers: getAuthHeader()
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
          <Link to="/reader" className={styles.cancelBtn}>
            Cancel
          </Link>

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
