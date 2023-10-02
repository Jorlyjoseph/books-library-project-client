import styles from './ReaderSearch.module.css';

const ReaderSearch = () => {
  return (
    <div className="searchpage">
      <div>
        <select className="form-select" aria-label="Default select example">
          <option selected>Please select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="{styles.container}">
        <div className={styles.readerbox}>
          <div className={styles.info}>
            <div className={styles.label}>Name</div>
            <div>John</div>
          </div>

          <div className={styles.bookLogs}>
            <div className={styles.info}>
              <div className={styles.label}>Started</div>
              <div>Date</div>
            </div>

            <div className={styles.info}>
              <div className={styles.label}>Status</div>
              <div>Inactive</div>
            </div>

            <div>
              <span className="badge text-bg-danger">Borrowed</span>

              <span className="badge text-bg-success">Returned</span>
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
