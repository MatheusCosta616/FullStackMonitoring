import React from 'react'
import { Outlet } from "react-router-dom";

import './AppCss/App.scss'
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';

function App() {
  return (
    <div className="app-container">
      <Cabecalho id="menu"/>
      <main className="main-content">
        <Outlet id="corpo" />
      </main>
      <Rodape id="ropade" />
    </div>
  )
}

export default App