import { useContext, useEffect, useState } from 'react';
import styles from './EditReader.module.css';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { API_URL } from '../../config';
import { AuthContext } from '../../context/auth.context';
import { errorNotify, successNotify } from '../../components/Toast/Toast';

const EditReader = () => {
  const navigate = useNavigate();
  const { readerId } = useParams();
  const [readerName, setReaderName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [doj, setDoj] = useState('');
  const { getAuthHeader } = useContext(AuthContext);

  useEffect(() => {
    axios({
      method: 'get',
      url: `${API_URL}/api/readers/${readerId}`,
      headers: getAuthHeader()
    }).then(({ data }) => {
      setReaderName(data.name);
      setEmail(data.email);
      setDob(data.dob);
      setDoj(data.registration_date);
    });
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();

    axios({
      method: 'put',
      url: `${API_URL}/api/readers/${readerId}`,
      data: {
        name: readerName,
        dob: dob,
        email: email,
        registrationDate: doj
      },
      headers: getAuthHeader()
    })
      .then(() => {
        successNotify('Reader Updated');
        navigate('/');
      })
      .catch(() => {
        errorNotify('Reader Update failed');
      });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Edit Reader Data</h2>

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
            value={dayjs(dob).format('YYYY-MM-DD')}
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
            value={dayjs(doj).format('YYYY-MM-DD')}
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
          <Link to="/reader" className={styles.cancelBtn}>
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

export default EditReader;
