import styles from './LentBook.module.css';

const LentBook = () => {
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
              <option selected>Reader</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
