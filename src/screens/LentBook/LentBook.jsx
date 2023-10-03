import axios from 'axios';
import styles from './LentBook.module.css';
import { useEffect, useState } from 'react';

// 1. fetch readers list
// 2. fetch book details by bookId
// 3. lent book submit api call

//http://localhost:5005/api/readers

const LentBook = () => {
  const [readers, setReaders] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:5005/api/readers`
    }).then((bookReaders) => {
      setReaders(bookReaders.data);
      console.log(bookReaders);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lent Book</h2>
      <div className={styles.innerContainer}>
        <div className={styles.nameValuePair}>
          <div className={styles.label}>Title</div>
          <div>Tarzen</div>
        </div>
        <div className={styles.nameValuePair}>
          <div className={styles.label}>Author</div>
          <div>Modi</div>
        </div>
        <div className={styles.nameValuePair}>
          <div className={styles.label}>Reader</div>
          <div>
            <select className="form-select">
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

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LentBook;
