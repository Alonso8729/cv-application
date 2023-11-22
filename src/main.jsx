import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import HomePage from './components/HomePage.jsx';
import './index.css';

ReactDOM  .createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/cv-application" element={<HomePage />} />
        <Route path="/cv-application/cv" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);