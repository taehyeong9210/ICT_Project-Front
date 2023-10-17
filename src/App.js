import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import React from 'react';
import Signup from './pages/Signup';
import Main from './pages/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
