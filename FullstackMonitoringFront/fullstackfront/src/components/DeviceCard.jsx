import React from 'react';
import { Link } from 'react-router-dom';
import '../components/css/DeviceCard.scss';

function DeviceCard({ device, onUpdate }) {
  const handleDelete = async () => {
    if (window.confirm(`Tem certeza que deseja excluir o dispositivo "${device.name}"?`)) {
      try {
        console.log(`Tentando excluir dispositivo com ID: ${device.id}`);
        const response = await fetch(`http://localhost:8080/devices/${device.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        const responseData = await response.text();
        console.log('Resposta do servidor:', responseData);

        if (!response.ok) {
          throw new Error(`Falha ao excluir dispositivo: ${responseData}`);
        }
        
        console.log('Dispositivo excluído com sucesso');
        onUpdate();
      } catch (error) {
        console.error('Erro ao excluir dispositivo:', error);
        alert(`Erro ao excluir dispositivo: ${error.message}`);
      }
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? 'Data inválida' : date.toLocaleString();
  };

  return (
    <div className="device-card">
      <Link to={`/device/${device.id}`}>
        <h2>{device.name}</h2>
        <p className={`status ${device.status.toLowerCase()}`}>Status: {device.status}</p>
        <p>Último ping: {formatDate(device.lastPing)}</p>
      </Link>
      <button onClick={handleDelete} className="delete-btn">Excluir</button>
    </div>
  );
}

export default DeviceCard;