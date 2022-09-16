import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getGroups } from './actions/groups'
import Navbar from './components//Navbar'
import Home from './components/Home'
import BookResults from './components/BookResults'
import './App.css';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGroups)
  }, [dispatch])
  

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
