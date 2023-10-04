import { useState } from 'react';
import styles from './ReaderSearch.module.css';
import axios from 'axios';

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
  console.log(readerList);
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
              <div className={styles.readerBox}>
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
                    <div>In Active</div>
                  </div>
                </div>
                <div className={styles.rightContainer}>
                  <div>
                    {reader.active === true ? (
                      <span className="badge text-bg-success">Active</span>
                    ) : (
                      <span className="badge text-bg-danger">In Active</span>
                    )}
                  </div>

                  <div>
                    {/* <Link to={`/reader/${reader._id}/edit`}>
                      <i className="bi bi-pencil-square"></i>
                    </Link> */}
                  </div>
                  <div>
                    <i className="bi bi-trash3"></i>
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
