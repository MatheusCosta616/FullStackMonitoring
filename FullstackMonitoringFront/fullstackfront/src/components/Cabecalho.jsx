import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components/css/Cabecalho.scss';

function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="logo">
        <h1>FullStack Monitoring</h1>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/home">Início</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Cabecalho;