import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components//Navbar'
import Home from './components/Home'
import Auth from './components/Auth'
import BookResults from './components/BookResults'
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth" exact element={<Auth />} />
        <Route path="/bookresults" element={<BookResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
