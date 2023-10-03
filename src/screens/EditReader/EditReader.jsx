import { useEffect, useState } from 'react';
import styles from './EditReader.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import * as dayjs from 'dayjs';

const EditReader = () => {
  const { readerId } = useParams();
  const [readerName, setReaderName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [doj, setDoj] = useState('');

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:5005/api/readers/${readerId}`
    }).then(({ data }) => {
      console.log(data);
      setReaderName(data.name);
      setEmail(data.email);
      setDob(dayjs(data.dob).format('YYYY-MM-DD'));
      setDoj(dayjs(data.registration_date).format('YYYY-MM-DD'));
    });
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();

    axios({
      method: 'post',
      url: `http://localhost:5005/api/readers/create`,
      data: {
        name: readerName,
        dob: dob,
        email: email,
        registrationDate: doj
      }
    }).then(() => {
      setReaderName('');
      setEmail('');
      setDob('');
      setDoj('');
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
