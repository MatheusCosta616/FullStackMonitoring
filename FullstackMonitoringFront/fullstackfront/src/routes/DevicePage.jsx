import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './css/DevicePage.scss';

function DevicePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [device, setDevice] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedDevice, setEditedDevice] = useState({});
  const [alerts, setAlerts] = useState([]);
  const [newAlert, setNewAlert] = useState({ condition: '', message: '' });
  const [logs, setLogs] = useState('');
  const [newLog, setNewLog] = useState('');
  const statusOptions = ["ativo", "inativo", "falha"];

  useEffect(() => {
    fetchDevice();
    fetchAlerts();
    fetchLogs();
  }, [id]);

  //endpoint GET/devices/{deviceId}, para puxar um device especifico
  const fetchDevice = async () => {
    try {
      const response = await fetch(`http://localhost:8080/devices/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });
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

  //endpoint GET/devices/{deviceId}/alert, para puxar os alertas de um device especifico
  const fetchAlerts = async () => {
    try {
      const response = await fetch(`http://localhost:8080/devices/${id}/alert`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });
      if (!response.ok) {
        throw new Error('Falha ao buscar alertas');
      }
      const data = await response.text(); // Mudança aqui: usando text() em vez de json()
      console.log('Alerta recebido:', data); // Log para debug
      setAlerts(data ? [{ message: data }] : []); // Ajuste aqui: criando um array com o alerta
    } catch (error) {
      console.error('Erro ao buscar alertas:', error);
      setAlerts([]); // Em caso de erro, definimos alerts como um array vazio
    }
  };

  //endpoint GET/devices/{deviceId}/log, para puxar os logs de um device especifico
  const fetchLogs = async () => {
    try {
      const response = await fetch(`http://localhost:8080/devices/${id}/log`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });
      if (!response.ok) {
        throw new Error('Falha ao buscar logs');
      }
      const data = await response.text();
      setLogs(data);
    } catch (error) {
      console.error('Erro ao buscar logs:', error);
    }
  };

  //endpoint PUT/devices/{deviceId}, para atualizar um device especifico
  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:8080/devices/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
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

  //endpoint DELETE/devices/{deviceId}, para deletar um device especifico
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/devices/${id}`, {
        method: 'DELETE',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      });
      if (!response.ok) {
        throw new Error('Falha ao excluir dispositivo');
      }
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao excluir dispositivo:', error);
    }
  };

  //endpoint POST/devices/{deviceId}/alert, para adicionar um alerta
  const handleAddAlert = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/devices/${id}/alert`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(newAlert.message),
      });
      if (!response.ok) {
        throw new Error('Falha ao adicionar alerta');
      }
      await fetchAlerts();
      setNewAlert({ condition: '', message: '' });
      alert('Alerta adicionado com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar alerta:', error);
      alert(`Erro ao adicionar alerta: ${error.message}`);
    }
  };

  //endpoint POST/devices/{deviceId}/log, para adicionar um log
  const handleAddLog = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/devices/${id}/log`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(newLog),
      });
      if (!response.ok) {
        throw new Error('Falha ao adicionar log');
      }
      fetchLogs();
      setNewLog('');
    } catch (error) {
      console.error('Erro ao adicionar log:', error);
    }
  };

  //se o dispositivo nao existir, retorna uma mensagem de carregamento
  if (!device) return <div>Carregando...</div>;

  return (
    <div className="device-page">
      {/* informaçes do dispositivo */}
      <div className="device-info">
        {/* se o dispositivo estiver em modo de edição, exibe o formulario de edição */}
        {editMode ? (
          <div className="edit-form">
            <input
              value={editedDevice.name}
              onChange={(e) => setEditedDevice({...editedDevice, name: e.target.value})}
              placeholder="Nome do dispositivo"
            />
            <select
              value={editedDevice.status}
              onChange={(e) => setEditedDevice({...editedDevice, status: e.target.value})}
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
            <input
              value={editedDevice.location}
              onChange={(e) => setEditedDevice({...editedDevice, location: e.target.value})}
              placeholder="Localização"
            />
            {/* botoes de salvar e cancelar */}
            <div className="button-group">
              <button onClick={handleUpdate} className="save-btn">Salvar</button>
              <button onClick={() => setEditMode(false)} className="cancel-btn">Cancelar</button>
            </div>
          </div>
          //se o dispositivo nao estiver em modo de edição, exibe as informaçes do dispositivo
        ) : (
          //informaçes do dispositivo
          <div className="device-details">
            <h1>{device.name}</h1>
            <p className={`status ${device.status.toLowerCase()}`}>Status: {device.status}</p>
            <p>Localização: {device.location}</p>
            <p>Último ping: {new Date(device.lastPing).toLocaleString()}</p>
            <div className="button-group">
              <button onClick={() => setEditMode(true)} className="edit-btn">Editar</button>
            </div>
            <div className="button-group">
              <button onClick={handleDelete} className="delete-btn">Apagar Dispositivo</button>
            </div>
          </div>
        )}
      </div>

      {/* alertas do dispositivo */}
      <div className="alerts-section">
        <h2>Alertas</h2>
        {alerts.length > 0 ? (
          <ul className="alerts-list">
            {alerts.map((alert, index) => (
              <li key={index} className="alert-item">
                {alert.message}
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum alerta configurado para este dispositivo.</p>
        )}
        <form onSubmit={handleAddAlert} className="add-alert-form">
          <input
            type="text"
            placeholder="Novo alerta"
            value={newAlert.message}
            onChange={(e) => setNewAlert({...newAlert, message: e.target.value})}
            required
          />
          <button type="submit">Adicionar Alerta</button>
        </form>
      </div>


      {/* logs do dispositivo */}
      <div className="logs-section">
        <h2>Logs</h2>
        <pre>{logs}</pre>
        <form onSubmit={handleAddLog} className="add-log-form">
          <input
            type="text"
            placeholder="Novo log"
            value={newLog}
            onChange={(e) => setNewLog(e.target.value)}
            required
          />
          <button type="submit">Adicionar Log</button>
        </form>
      </div>
    </div>
  );
}

export default DevicePage;
