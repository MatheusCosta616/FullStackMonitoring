import React, { useState } from 'react';
import './css/AddDeviceForm.scss';

function AddDeviceForm({ onAddDevice }) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('ativo'); // Definindo um valor padrão
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDevice = {
      name,
      status,
      location,
      lastPing: new Date().toISOString(), // Adicionando lastPing
      logs: '', // Campo vazio para logs
      alert: '' // Campo vazio para alert
    };
    onAddDevice(newDevice);
    setName('');
    setStatus('ativo');
    setLocation('');
  };

  return (
    <form className="add-device-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do dispositivo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <div className="select-wrapper">
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
          <option value="falha">Falha</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Localização"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <button type="submit">Adicionar Dispositivo</button>
    </form>
  );
}

export default AddDeviceForm;
