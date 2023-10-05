import { useContext, useState } from 'react';
import styles from './AddBooks.module.css';
import axios from 'axios';
import { API_URL } from '../../config';
import { AuthContext } from '../../context/auth.context';

const AddBooks = () => {
  const [language, setLanguage] = useState('DEFAULT');
  const [category, setCategory] = useState('DEFAULT');
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookLocation, setBookLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [bookDescription, setBookDescription] = useState('');
  const [isbn, setIsbn] = useState('');
  const [published, setPublished] = useState('');
  const { getAuthHeader } = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    axios({
      method: 'post',
      url: `${API_URL}/api/books`,
      data: {
        title: bookTitle,
        author: bookAuthor,
        category: category,
        language: language,
        location: bookLocation,
        imageUrl: imageUrl,
        description: bookDescription,
        isbn: isbn,
        published: published
      },
      headers: getAuthHeader()
    }).then(() => {
      setBookTitle('');
      setBookAuthor('');
      setCategory('');
      setLanguage('');
      setBookLocation('');
      setImageUrl('');
      setBookDescription('');
      setIsbn('');
      setPublished('');
    });
  };

  return (
    <div className={styles.container}>
      <h2>Add books</h2>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={bookTitle}
            onChange={(event) => {
              setBookTitle(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            value={bookAuthor}
            onChange={(event) => {
              setBookAuthor(event.target.value);
            }}
          />
        </div>

        <label className="form-label">Category</label>
        <select
          className="form-select mb-3"
          onChange={(event) => {
            setCategory(event.target.value);
          }}
          value={category}
        >
          <option value="DEFAULT" disabled>
            Please Select
          </option>
          <option value="Fiction">Fiction</option>
          <option value="Romance">Romance</option>
          <option value="Horror">Horror</option>
          <option value="Thriller">Thriller</option>
          <option value="Autobiography">Autobiography</option>
        </select>

        <label className="form-label">Language</label>
        <select
          className="form-select mb-3"
          onChange={(event) => {
            setLanguage(event.target.value);
          }}
          value={language}
        >
          <option value="DEFAULT" disabled>
            Please Select
          </option>
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="Hindi">Hindi</option>
          <option value="Malayalam">Malayalam</option>
        </select>

        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            value={bookLocation}
            onChange={(event) => {
              setBookLocation(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">ISBN Num</label>
          <input
            type="text"
            className="form-control"
            value={isbn}
            onChange={(event) => {
              setIsbn(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Published</label>
          <input
            type="text"
            className="form-control"
            value={published}
            onChange={(event) => {
              setPublished(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="text"
            className="form-control"
            value={imageUrl}
            onChange={(event) => {
              setImageUrl(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            value={bookDescription}
            onChange={(event) => {
              setBookDescription(event.target.value);
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
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBooks;
