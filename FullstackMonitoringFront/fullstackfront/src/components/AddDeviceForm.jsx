import React, { useState } from 'react';
import './css/AddDeviceForm.scss';

function AddDeviceForm({ onAddDevice }) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddDevice({ name, status, location });
    setName('');
    setStatus('');
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
      <input
        type="text"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        placeholder="Status"
        required
      />
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