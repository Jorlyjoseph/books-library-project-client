import { useState } from 'react';
import styles from './ReaderSearch.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ReaderSearch = () => {
  const [query, setQuery] = useState('');

  const [readerList, setReaderList] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    axios({
      method: 'get',
      url: `http://localhost:5005/api/readers/search/`,
      params: {
        query: query
      }
    }).then((reader) => {
      setReaderList(reader.data);
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <div className="input-group input-group-lg">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>

              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
                value={query}
              />
            </div>
          </div>
        </div>
      </form>

      <div>
        <div className={styles.readerListContainer}>
          {readerList.length > 0 &&
            readerList.map((reader) => (
              <div key={reader._id} className={styles.readerBox}>
                <div className={styles.leftContainer}>
                  <div className={styles.valuePair}>
                    <div className={styles.label}>Name</div>
                    <div>{reader.name}</div>
                  </div>

                  <div className={styles.valuePair}>
                    <div className={styles.label}>Started</div>
                    <div>{reader.registration_date}</div>
                  </div>

                  <div className={styles.valuePair}>
                    <div className={styles.label}>Status</div>
                    {reader.active === true ? (
                      <span className="badge text-bg-success">Active</span>
                    ) : (
                      <span className="badge text-bg-danger">Inactive</span>
                    )}
                  </div>
                </div>

                <div className={styles.rightContainer}>
                  <div>
                    {reader.active === true ? (
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={submitHandler}
                      >
                        Deactivate
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={submitHandler}
                      >
                        Activate
                      </button>
                    )}
                  </div>

                  <div>
                    <Link to={`/reader/${reader._id}/edit`}>
                      <i className="bi bi-pencil-square"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default ReaderSearch;
