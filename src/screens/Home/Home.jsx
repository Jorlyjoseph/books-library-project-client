import React, { useState } from 'react';
import styles from './Home.module.css';
import axios from 'axios';
import BookDetails from '../../components/BookDetails/BookDetails';

const Home = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('title');
  const [bookList, setBookList] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    axios({
      method: 'get',
      url: `http://localhost:5005/api/books/search`,
      params: {
        query: query,
        category: category
      }
    }).then((books) => {
      setBookList(books.data);
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.container}>
        <div className={styles.searchContainer}>
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

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="filter"
              value="title"
              checked={category === 'title'}
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            />
            <label className="form-check-label">Title</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="filter"
              value="author"
              checked={category === 'author'}
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            />
            <label className="form-check-label">Author</label>
          </div>
        </div>

        <div className={styles.bookListContainer}>
          {bookList.map((book) => (
            <BookDetails details={book} key={book._id} />
          ))}
        </div>
      </div>
    </form>
  );
};

export default Home;
