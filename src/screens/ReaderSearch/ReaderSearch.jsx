import { useState } from 'react';
import styles from './ReaderSearch.module.css';

const ReaderSearch = () => {
  const [query, setQuery] = useState('');
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(query);
    // get data using reader search api
    // save the data to use state
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
        {/* map the reader box using reader data set in the use state  */}
        <div className={styles.readerBox}>
          <div className={styles.leftContainer}>
            <div className={styles.valuePair}>
              <div className={styles.label}>Name</div>
              <div>John</div>
            </div>

            <div className={styles.valuePair}>
              <div className={styles.label}>Started</div>
              <div>10-12-2003</div>
            </div>

            <div className={styles.valuePair}>
              <div className={styles.label}>Status</div>
              <div>In Active</div>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div>
              <span className="badge text-bg-danger">Borrowed</span>

              {/* <span className="badge text-bg-success">Returned</span> */}
            </div>

            <div>
              <i className="bi bi-pencil-square"></i>
            </div>
            <div>
              <i className="bi bi-trash3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReaderSearch;
