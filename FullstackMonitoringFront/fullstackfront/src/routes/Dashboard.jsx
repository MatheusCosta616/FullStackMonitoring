import React, { useState, useEffect } from 'react';
import DeviceCard from '../components/DeviceCard';
import AddDeviceForm from '../components/AddDeviceForm';
import './css/Dashboard.scss';

function Dashboard() {
  const [devices, setDevices] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetchDevices();
  }, []);

  //endpoint GET/devices, para puxar todos dispositivos
  const fetchDevices = async () => {
    try {
      console.log('Buscando dispositivos...');
      const response = await fetch('http://localhost:8080/devices');
      if (!response.ok) {
        throw new Error('Falha ao buscar dispositivos');
      }
      const data = await response.json();
      console.log('Dispositivos recebidos:', data);
      setDevices(data);
    } catch (error) {
      console.error('Erro ao buscar dispositivos:', error);
    }
  };

  //endpoint POST/devices, para cadastrar dispositivos
  const handleAddDevice = async (newDevice) => {
    try {
      const response = await fetch('http://localhost:8080/devices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(newDevice)
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Falha ao adicionar dispositivo: ${errorData}`);
      }

      const addedDevice = await response.json();
      setDevices([...devices, addedDevice]);
    } catch (error) {
      console.error('Erro ao adicionar dispositivo:', error);
      alert(error.message);
    }
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <button onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? 'Cancelar' : 'Adicionar Dispositivo'}
      </button>
      {showAddForm && (
        <div className="add-device-form-container">
          <AddDeviceForm onAddDevice={handleAddDevice} />
        </div>
      )}
      <div className="device-grid">
        {devices.map(device => (
          <DeviceCard key={device.id} device={device} onUpdate={fetchDevices} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
