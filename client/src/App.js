import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components//Navbar'
import Home from './components/Home'
import BookResults from './components/BookResults'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/bookResults" element={<BookResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
