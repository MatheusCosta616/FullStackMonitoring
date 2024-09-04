import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './css/DevicePage.scss';

function DevicePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [device, setDevice] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedDevice, setEditedDevice] = useState({});

  useEffect(() => {
    fetchDevice();
  }, [id]);

  const fetchDevice = async () => {
    try {
      const response = await fetch(`http://localhost:8080/devices/${id}`);
      if (!response.ok) {
        throw new Error('Falha ao buscar dispositivo');
      }
      const data = await response.json();
      setDevice(data);
      setEditedDevice(data);
    } catch (error) {
      console.error('Erro ao buscar dispositivo:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:8080/devices/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedDevice),
      });
      if (!response.ok) {
        throw new Error('Falha ao atualizar dispositivo');
      }
      setDevice(editedDevice);
      setEditMode(false);
    } catch (error) {
      console.error('Erro ao atualizar dispositivo:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/devices/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Falha ao excluir dispositivo');
      }
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao excluir dispositivo:', error);
    }
  };

  if (!device) return <div>Carregando...</div>;

  return (
    <div className="device-page">
      {editMode ? (
        <>
          <input
            value={editedDevice.name}
            onChange={(e) => setEditedDevice({...editedDevice, name: e.target.value})}
          />
          <input
            value={editedDevice.status}
            onChange={(e) => setEditedDevice({...editedDevice, status: e.target.value})}
          />
          <input
            value={editedDevice.location}
            onChange={(e) => setEditedDevice({...editedDevice, location: e.target.value})}
          />
          <button onClick={handleUpdate}>Salvar</button>
          <button onClick={() => setEditMode(false)}>Cancelar</button>
        </>
      ) : (
        <>
          <h1>{device.name}</h1>
          <p className={`status ${device.status.toLowerCase()}`}>Status: {device.status}</p>
          <p>Localização: {device.location}</p>
          <p>Último ping: {new Date(device.lastPing).toLocaleString()}</p>
          <button onClick={() => setEditMode(true)}>Editar</button>
        </>
      )}
      <button className="delete-btn" onClick={handleDelete}>Apagar Dispositivo</button>
    </div>
  );
}

export default DevicePage;