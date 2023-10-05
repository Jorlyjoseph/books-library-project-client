import { useContext, useState } from 'react';
import styles from './LoginScreen.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import { API_URL } from '../../config';

const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    axios({
      method: 'post',
      url: `${API_URL}/api/auth/login`,
      data: {
        email: email,
        password: password
      }
    }).then(({ data }) => {
      storeToken(data.authToken);
      authenticateUser();
      navigate('/');
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>The Book Oracle</h2>
      <h3 className={styles.name}>Sign in your account</h3>

      <form>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
