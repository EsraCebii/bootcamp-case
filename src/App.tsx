import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import BoardApp from "./components/Home/BoardApp";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Board from "./components/Board/Board";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import NewBoard from "./components/Board/NewBoard";
import PrivateRoute from "./components/PrivateRoute";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });

function App() {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/boards' element={<PrivateRoute component={BoardApp} />} />
          <Route path='/board/:id' element={<PrivateRoute component={Board} />} />
          <Route path='/newBoard' element={<PrivateRoute component={NewBoard} />} />    
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
