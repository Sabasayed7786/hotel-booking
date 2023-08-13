import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
    
  <BrowserRouter>
      
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/register" element={<Register/>} />
          
          </Routes >
     
    </BrowserRouter>
    </div>
  );
}

export default App;

