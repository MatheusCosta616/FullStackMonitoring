import React from 'react';
import { Link } from 'react-router-dom';
import '../components/css/DeviceCard.scss';

function DeviceCard({ device, onUpdate }) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/devices/${device.id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Falha ao excluir dispositivo');
      }
      onUpdate(); // Atualiza a lista de dispositivos após a exclusão
    } catch (error) {
      console.error('Erro ao excluir dispositivo:', error);
    }
  };

  return (
    <div className="device-card">
      <Link to={`/device/${device.id}`}>
        <h2>{device.name}</h2>
        <p className={`status ${device.status.toLowerCase()}`}>Status: {device.status}</p>
        <p>Último ping: {new Date(device.lastPing).toLocaleString()}</p>
      </Link>
      <button onClick={handleDelete} className="delete-btn">Excluir</button>
    </div>
  );
}

export default DeviceCard;