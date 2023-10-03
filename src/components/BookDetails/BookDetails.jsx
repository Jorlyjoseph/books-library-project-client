import React from 'react';
import styles from './BookDetails.module.css';
import { Link, useNavigate } from 'react-router-dom';

const BookDetails = ({ details }) => {
  const navigate = useNavigate();

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
          <div>{details.reader}</div>
        </div>
      </div>

      <div className={styles.actionContainer}>
        <div className={styles.userActions}>
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
          <div>
            <i className="bi bi-trash3"></i>
          </div>
        </div>

        <div className={styles.bookActions}>
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
              <button type="button" className="btn btn-primary btn-lg">
                Return
              </button>
            )}
          </div>

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
