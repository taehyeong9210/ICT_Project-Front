import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import React from "react";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Diary from "./pages/Diary";
import Todolist from "./pages/Todolist";

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
          <Route path="/diary" element={<Diary />} />
          <Route path="/todolist" element={<Todolist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
