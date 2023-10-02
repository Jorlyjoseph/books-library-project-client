import styles from './AddEditBooks.module.css';

const AddEditBooks = () => {
  return (
    <div className={styles.container}>
      <form>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="Name" />
        </div>

        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Author
          </label>
          <input type="text" className="form-control" id="Name" />
        </div>

        <select class="form-select" aria-label="Default select example">
          <option selected>Category</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select class="form-select" aria-label="Default select example">
          <option selected>Language</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Location
          </label>
          <input type="text" className="form-control" id="Name" />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Description
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <div className={styles.btnContainer}>
          <button type="button" class="btn btn-link">
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
