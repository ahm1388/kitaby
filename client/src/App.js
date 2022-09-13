import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components//Navbar'
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
