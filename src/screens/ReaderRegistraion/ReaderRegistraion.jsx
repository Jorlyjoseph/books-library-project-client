import { useContext, useState } from 'react';
import styles from './ReaderRegistraion.module.css';
import axios from 'axios';
import { API_URL } from '../../config';
import { AuthContext } from '../../context/auth.context';
import { Link } from 'react-router-dom';
import { errorNotify, successNotify } from '../../components/Toast/Toast';

const ReaderRegistration = () => {
  const [readerName, setReaderName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [doj, setDoj] = useState('');
  const { getAuthHeader } = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    axios({
      method: 'post',
      url: `${API_URL}/api/readers/create`,
      data: {
        name: readerName,
        dob: dob,
        email: email,
        registrationDate: doj
      },
      headers: getAuthHeader()
    })
      .then(() => {
        setReaderName('');
        setEmail('');
        setDob('');
        setDoj('');
        successNotify('Reader added');
      })
      .catch(() => {
        errorNotify('Reader adding faild');
      });
  };

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
          <Link to="/" className={styles.cancelBtn}>
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
      </form>
    </div>
  );
};

export default ReaderRegistration;
