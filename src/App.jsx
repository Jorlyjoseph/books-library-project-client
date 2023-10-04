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

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/reader/new" element={<ReaderRegistration />} />
        <Route path="/book/:bookId/history" element={<BookHistory />} />
        <Route path="/book/new" element={<AddBooks />} />
        <Route path="/book/:bookId/edit" element={<EditBooks />} />
        <Route path="/book/:bookId/lent" element={<LentBook />} />
        <Route
          path="/reader"
          element={
            <IsPrivateScreen>
              <ReaderSearch />
            </IsPrivateScreen>
          }
        />
        <Route path="/reader/:readerId/edit" element={<EditReader />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
