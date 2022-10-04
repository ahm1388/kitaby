import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components//Navbar'
import Home from './components/Home'
import Auth from './components/Auth'
import BookResults from './components/BookResults'
import GroupDetails from './components/GroupDetails'
import ErrorPage from './components/ErrorPage'
import './App.css';
import { gapi } from "gapi-script"

function App() {
  gapi.load("client:auth2", () => {
    gapi.auth2.init({
      clientId:
        "140492617909-anrkhjs44j0omekjt9s1s0cu791mjchv.apps.googleusercontent.com",
      plugin_name: "chat",
    })
  })


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/bookresults" exact element={<BookResults />} />
        <Route path="/bookresults/search" exact element={<BookResults />} />
        <Route path="/bookresults/:id" element={<GroupDetails />} /> 
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
