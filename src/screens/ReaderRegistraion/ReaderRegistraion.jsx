import styles from './ReaderRegistraion.module.css';

const ReaderRegistration = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>User Registration</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="Name" />
        </div>

        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input type="date" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Date of Join</label>
          <input type="date" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email id</label>
          <input type="email" className="form-control" />
        </div>

        <div className={styles.btnContainer}>
          <button type="button" class="btn btn-link">
            Cancel
          </button>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReaderRegistration;
