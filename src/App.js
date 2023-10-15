import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
