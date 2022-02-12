import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './conponents/home';
import Profile from './conponents/profile';
import NotFound from './conponents/not_found';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;