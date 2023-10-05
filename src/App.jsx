import { Routes, Route } from 'react-router-dom';
import './App.css';

import ReaderRegistration from './screens/ReaderRegistraion/ReaderRegistraion';
import Navbar from './components/Navbar/Navbar';
import BookHistory from './screens/BookHistory/BookHistory';
import LoginScreen from './screens/Login/LoginScreen';
import AddBooks from './screens/AddBooks/AddBooks';
import EditBooks from './screens/EditBooks/EditBooks';
import LentBook from './screens/LentBook/LentBook';
import ReaderSearch from './screens/ReaderSearch/ReaderSearch';
import Home from './screens/Home/Home';
import EditReader from './screens/EditReader/EditReader';
import IsPrivateScreen from './components/IsPrivate/IsPrivateScreen';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
      <Routes>
        <Route
          path="/reader/new"
          element={
            <IsPrivateScreen>
              <ReaderRegistration />
            </IsPrivateScreen>
          }
        />
        <Route
          path="/book/:bookId/history"
          element={
            <IsPrivateScreen>
              <BookHistory />
            </IsPrivateScreen>
          }
        />
        <Route
          path="/book/new"
          element={
            <IsPrivateScreen>
              <AddBooks />
            </IsPrivateScreen>
          }
        />
        <Route
          path="/book/:bookId/edit"
          element={
            <IsPrivateScreen>
              <EditBooks />
            </IsPrivateScreen>
          }
        />
        <Route
          path="/book/:bookId/lent"
          element={
            <IsPrivateScreen>
              <LentBook />
            </IsPrivateScreen>
          }
        />
        <Route
          path="/reader"
          element={
            <IsPrivateScreen>
              <ReaderSearch />
            </IsPrivateScreen>
          }
        />
        <Route
          path="/reader/:readerId/edit"
          element={
            <IsPrivateScreen>
              <EditReader />
            </IsPrivateScreen>
          }
        />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
