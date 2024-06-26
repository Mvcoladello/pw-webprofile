import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Admin from './pages/admin.jsx';
import Mercado from './pages/mercado.jsx';
import Webmotors from './pages/webmotors.jsx';
import Porshe from './pages/porshe.jsx';
import Trivago from './pages/trivago.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/mercado" element={<Mercado />} />
        <Route path="/webmotors" element={<Webmotors />} />
        <Route path="/porshe" element={<Porshe />} />
        <Route path="/trivago" element={<Trivago />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
