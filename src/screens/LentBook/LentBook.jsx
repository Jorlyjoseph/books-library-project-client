import styles from './LentBook.module.css';

const LentBook = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <form>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Title
            </label>
            <input type="text" className="form-control" id="Name" />
          </div>

          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Author
            </label>
            <input type="text" className="form-control" id="Name" />
          </div>

          <select className="form-select" aria-label="Default select example">
            <option selected>Reader</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <div className={styles.btnContainer}>
            <button type="button" className="btn btn-link">
              Cancel
            </button>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LentBook;
