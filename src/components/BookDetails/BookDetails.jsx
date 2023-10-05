import React, { useContext } from 'react';
import styles from './BookDetails.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';
import IsPrivate from '../IsPrivate/IsPrivate';
import { AuthContext } from '../../context/auth.context';
import { API_URL } from '../../config';

const BookDetails = ({ details }) => {
  const navigate = useNavigate();
  const { getAuthHeader } = useContext(AuthContext);

  const returnHandler = (bookId, readerId) => {
    axios({
      method: 'post',
      url: `${API_URL}/api/logs/transaction`,
      data: {
        bookId: bookId,
        readerId: readerId,
        date: dayjs(new Date()).format('YYYY-MM-DDTHH:mm'),
        type: 'return'
      },
      headers: getAuthHeader()
    }).then(() => {
      navigate(`/book/${bookId}/history`);
    });
  };

  const deleteHandler = (bookId) => {
    axios({
      method: 'delete',
      url: `${API_URL}/api/books/${bookId}/remove`,
      headers: getAuthHeader()
    }).then(() => {
      navigate(`/`);
    });
  };

  return (
    <div className={styles.bookDetails}>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={details.image_url} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.info}>
          <div className={styles.label}>Title</div>
          <div>{details.title}</div>
        </div>
        <div className={styles.info}>
          <div className={styles.label}>Location</div>
          <div>{details.location}</div>
        </div>
        <div className={styles.info}>
          <div className={styles.label}>Author</div>
          <div>{details.author}</div>
        </div>
        <div className={styles.info}>
          <div className={styles.label}>Category</div>
          <div>{details.category}</div>
        </div>
        <div className={styles.info}>
          <div className={styles.label}>Published</div>
          <div>{details.published}</div>
        </div>
        <div className={styles.info}>
          <div className={styles.label}>Reader</div>
          <div>{details.reader_id?.name}</div>
        </div>
      </div>

      <div className={styles.actionContainer}>
        <div className={styles.userActions}>
          <IsPrivate>
            <div>
              <Link to={`/book/${details._id}/history`}>
                <i className="bi bi-clock-history"></i>
              </Link>
            </div>
            <div>
              <Link to={`/book/${details._id}/edit`}>
                <i className="bi bi-pencil-square"></i>
              </Link>
            </div>
            <div className={styles.deleteBtn}>
              <i
                className="bi bi-trash3"
                onClick={() => {
                  deleteHandler(details._id);
                }}
              ></i>
            </div>
          </IsPrivate>
        </div>

        <div className={styles.bookActions}>
          <IsPrivate>
            <div>
              {details.available ? (
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => navigate(`/book/${details._id}/lent`)}
                >
                  Lent
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => {
                    returnHandler(details._id, details.reader_id._id);
                  }}
                >
                  Return
                </button>
              )}
            </div>
          </IsPrivate>

          <div>
            {details.available ? (
              <span className="badge text-bg-success">Available</span>
            ) : (
              <span className="badge text-bg-danger">Not Available</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
