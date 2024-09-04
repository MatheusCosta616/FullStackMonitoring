import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Login.scss';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você normalmente faria uma chamada à API para autenticar
    // Para este exemplo, vamos apenas verificar se o username não está vazio
    if (username.trim() !== '') {
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('username', username);
      navigate('/dashboard');
    } else {
      alert('Por favor, insira um nome de usuário válido.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;