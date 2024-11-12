import './App.css';
import Home from './components/Home';
import Hollywood from './components/Hollywood';
import Gujarati from './components/Gujarati';
import Series from './components/Series';
import South from './components/South';
import Error from './components/Error';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '*';
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      {showNavbar && <Navbar onSearch={handleSearch} />}
      <Routes>
        <Route path='/' element={<Home searchTerm={searchTerm} />} />
        <Route path='/hollywood-movies' element={<Hollywood searchTerm={searchTerm} />} />
        <Route path='/gujarati-movies' element={<Gujarati searchTerm={searchTerm} />} />
        <Route path='/south-movies' element={<South searchTerm={searchTerm} />} />
        <Route path='/series' element={<Series searchTerm={searchTerm} />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
