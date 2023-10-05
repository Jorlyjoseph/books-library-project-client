import { useContext, useState } from 'react';
import styles from './ReaderSearch.module.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import { API_URL } from '../../config';
import dayjs from 'dayjs';

const ReaderSearch = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const { getAuthHeader } = useContext(AuthContext);

  const [readerList, setReaderList] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    axios({
      method: 'get',
      url: `${API_URL}/api/readers/search/`,
      params: {
        query: query
      },
      headers: getAuthHeader()
    }).then((reader) => {
      setReaderList(reader.data);
    });
  };

  const actionHandler = (readerId, active) => {
    axios({
      method: 'put',
      url: `${API_URL}/api/readers/${readerId}`,
      data: {
        active: active
      },
      headers: getAuthHeader()
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.header}>Reader Search</h2>
      </div>
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

      <div className={styles.readerListContainer}>
        {readerList.length > 0 &&
          readerList.map((reader) => (
            <div key={reader._id} className={styles.readerBox}>
              <div className={styles.leftContainer}>
                <div className={styles.valuePair}>
                  <div className={styles.label}>Name</div>
                  <div>{reader.name}</div>
                </div>

                <div className={styles.valuePair}>
                  <div className={styles.label}>Started</div>
                  <div>
                    {dayjs(reader.registration_date).format(
                      'DD MMM YYYY @ HH:mm'
                    )}
                  </div>
                </div>

                <div className={styles.valuePair}>
                  <div className={styles.label}>Status</div>
                  {reader.active === true ? (
                    <span className="badge text-bg-success">Active</span>
                  ) : (
                    <span className="badge text-bg-danger">Inactive</span>
                  )}
                </div>
              </div>

              <div className={styles.rightContainer}>
                <div>
                  {reader.active === true ? (
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={() => actionHandler(reader._id, false)}
                    >
                      Deactivate
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={() => actionHandler(reader._id, true)}
                    >
                      Activate
                    </button>
                  )}
                </div>

                <div>
                  <Link to={`/reader/${reader._id}/edit`}>
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReaderSearch;
