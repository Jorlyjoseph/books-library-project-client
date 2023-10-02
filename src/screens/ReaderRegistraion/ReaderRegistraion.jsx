import { useState } from 'react';
import styles from './ReaderRegistraion.module.css';

const ReaderRegistration = () => {
  const [readerName, setReaderName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [doj, setDoj] = useState('');

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Reader Registration</h2>

      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={readerName}
            onChange={(event) => {
              setReaderName(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            value={dob}
            onChange={(event) => {
              setDob(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date of Join</label>
          <input
            type="date"
            className="form-control"
            value={doj}
            onChange={(event) => {
              setDoj(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

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
  );
};

export default ReaderRegistration;
