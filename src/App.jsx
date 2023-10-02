import { Routes, Route } from 'react-router-dom';
import './App.css';

import ReaderRegistration from './screens/ReaderRegistraion/ReaderRegistraion';
import Navbar from './components/Navbar/Navbar';
import BookHistory from './screens/BookHistory/BookHistory';
import LoginScreen from './screens/Login/LoginScreen';
import AddEditBooks from './screens/AddEditBooks/AddEditBooks';
import LentBook from './screens/LentBook/LentBook';
import ReaderSearch from './screens/ReaderSearch/ReaderSearch';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/reader/new" element={<ReaderRegistration />} />
        <Route path="/book/:bookId/history" element={<BookHistory />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/book/new" element={<AddEditBooks />} />
        <Route path="/book/:bookId/lent" element={<LentBook />} />
        <Route path="/reader" element={<ReaderSearch />} />
      </Routes>
    </div>
  );
}

export default App;
