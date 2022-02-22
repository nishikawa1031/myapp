import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router"

function App() {
  return (
      <BrowserRouter>
        <Dashboard/>
        <Router></Router>
      </BrowserRouter>
  );
}

export default App;
