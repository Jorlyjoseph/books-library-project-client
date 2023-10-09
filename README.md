# Oracle Library

# Description

A web-based application for managing a physical library. Librarians can manage the library's collection, while readers can search for available books.
Oracle is a physical library software, where readers get information regarding books. The Librerian have the full accessibility to use the software. Readers can search book with either name of the book or auther's name. librerian can use only with his username and password. He has the authority to lent and retun the books. also he can modify books and readers details.

# Main Functionalities

- Readers can search book by name or author.
- Librarian can access oracle library with login.
- Librarian can do all the functionalities(add, edit, update and delete the books) in this software.
- Librarian has the responsibility to add readers in this software.
- Librarian can update the status regarding reader's books eg:(lenting and returning the books).
- Librarian get history of the books and who all are lent or returned.

  # Features

- Librarian Dashboard:
  - Add new books to the library inventory.
  - Edit book details such as title, author, and availability.
  - View transaction history.
- Reader Dashboard:
  - Search for books based on title, author, or category.
  - View book availability status.

# Technologies Used

- HTML
- CSS
- JavaScript
- axios
- bootstrap
- dayjs
- toistfy
- React
- React Router
- Local Storage

- Frontend:

- React.js for building the user interface.
- Bootstrap for styling components.

- Backend:

- Node.js and Express.js for server-side logic and API endpoints.
- MongoDB for the database to store book information.

- Authentication:

- JWT (JSON Web Tokens) for user authentication.

# States

- search Screen
- Login Screen
- Readers adding Screen
- Books adding Screen
- Book history screen
- lenting and return book screen
- book edit/update screen
- librarian search view

# installation

Clone the repository:

- https://github.com/Jorlyjoseph/books-library-project-client

- https://github.com/Jorlyjoseph/books-library-project-server

## Install dependencies for both frontend and backend:

client:
`npm install`

server:
`npm install`

### Set up environment variables for MongoDB connection and JWT secret in the .env files.

### Start the development server:

client:
`npm run dev`

server:
`npm run dev`

## API Endpoints

#### GET /api/books

Get a list of available books.

#### POST /api/books

Add a new book to the library inventory.

#### PUT /api/books/:id

Update book details such as title, author, and availability.

## Usage

1. Librarians can log in to the dashboard using their credentials.
2. Librarians can add new books, update book details, and view transaction history.
3. Readers can search for books using the search feature and check book availability.

### Trello

[Link](https://trello.com/b/XlT936AC/library-project)

### Figma presentation

[Link](https://www.figma.com/file/d0OgX5yR0TtSvWJxLqSGWH/Untitled?type=design&node-id=26%3A197478&mode=dev)

### Slides

[Link](https://docs.google.com/presentation/d/1vCj4sQgVXwQ-w7MbdMNjY4ieFLriXlLyD6WWKkzuRi8/edit?usp=sharing)

## Deploy

[Link](https://euphonious-crostata-2ef294.netlify.app/)
