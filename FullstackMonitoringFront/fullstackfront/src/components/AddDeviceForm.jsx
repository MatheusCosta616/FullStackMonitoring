import React, { useState } from 'react';
import './css/AddDeviceForm.scss';

function AddDeviceForm({ onAddDevice }) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('online');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDevice = {
      name,
      status,
      location,
      lastPing: new Date().toISOString() // Adiciona o timestamp atual
    };
    onAddDevice(newDevice);
    setName('');
    setStatus('online');
    setLocation('');
  };

  return (
    <form className="add-device-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome do dispositivo"
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
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Localização"
        required
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default AddDeviceForm;