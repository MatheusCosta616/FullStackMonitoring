import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components/css/Cabecalho.scss';

function Cabecalho({ onLogout, isLoggedIn }) {
  const username = sessionStorage.getItem('username');

  return (
    <header className="cabecalho">
      <div className="logo">
        <h1>FullStack Monitoring</h1>
      </div>
      <nav>
        <ul>
          {isLoggedIn ? (
            <>
              <li><NavLink to="/home">Início</NavLink></li>
              <li><NavLink to="/dashboard">Dashboard</NavLink></li>
              <li><span className="username">Olá, {username}</span></li>
              <li><button onClick={onLogout} className="logout-btn">Sair</button></li>
            </>
          ) : (
            <li><NavLink to="/login">Login</NavLink></li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Cabecalho;