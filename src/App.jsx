import { Routes, Route } from 'react-router-dom';
import './App.css';

import ReaderRegistration from './screens/ReaderRegistraion/ReaderRegistraion';
import Navbar from './components/Navbar/Navbar';
import BookHistory from './screens/BookHistory/BookHistory';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/reader/new" element={<ReaderRegistration />} />
        <Route path="/book/:bookid/history" element={<BookHistory />} />
      </Routes>
    </div>
  );
}

export default App;
