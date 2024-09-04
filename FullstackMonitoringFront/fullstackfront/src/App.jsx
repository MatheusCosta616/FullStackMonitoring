import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import './AppCss/App.scss'
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    if (!loggedIn && location.pathname !== '/login') {
      navigate('/login');
    }
  }, [navigate, location]);

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="app-container">
      <Cabecalho onLogout={handleLogout} isLoggedIn={isLoggedIn} />
      <main className="main-content">
        <Outlet />
      </main>
      <Rodape />
    </div>
  )
}

export default App