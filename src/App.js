import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import React from 'react';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Contents from './pages/Contents';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: lightgrey;
    margin: 0; 
    padding: 0; 
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Main />} />
          <Route path="/contents" element={<Contents />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
