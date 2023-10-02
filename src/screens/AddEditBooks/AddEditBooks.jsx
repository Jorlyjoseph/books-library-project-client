import { useState } from 'react';
import styles from './AddEditBooks.module.css';

const AddEditBooks = () => {
  const [language, setLanguage] = useState('DEFAULT');
  const [category, setCategory] = useState('DEFAULT');

  return (
    <div className={styles.container}>
      <h2>Add books</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input type="text" className="form-control" />
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
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" rows="3" />
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

export default AddEditBooks;
