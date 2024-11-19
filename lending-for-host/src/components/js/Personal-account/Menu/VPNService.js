import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaServer, FaMapMarkerAlt, FaLock, FaKey, FaUsers } from 'react-icons/fa';
import '../PersonalPage.scss';

const VPNSetup = () => {
  const navigate = useNavigate();

  // Состояния для выбора параметров VPN-сервера
  const [serverType, setServerType] = useState('basic');
  const [location, setLocation] = useState('US');
  const [protocol, setProtocol] = useState('OpenVPN');
  const [encryption, setEncryption] = useState(80); // Используем проценты для шифрования
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [connectionLimit, setConnectionLimit] = useState(100); // Лимит подключений в процентах

  // Функция для сохранения настроек
  const handleSaveSettings = () => {
    // Логика для сохранения настроек
    alert(`Настройки для VPN-сервера сохранены:\n
      Тип: ${serverType}\n
      Расположение: ${location}\n
      Протокол: ${protocol}\n
      Шифрование: ${encryption}%\n
      Логин: ${username}\n
      Пароль: ${password}\n
      Лимит подключений: ${connectionLimit}%`);
    // Дополнительные действия, например, редирект на другие страницы
    navigate('/dashboard');
  };

  return (
    <div className="vpn-setup-container">
      <div className="vpn-header">
        <h2>Полная настройка VPN-сервера</h2>
      </div>

      <div className="vpn-options">
        {/* Тип сервера */}
        <div className="option">
          <label><FaServer /> Тип сервера</label>
          <select 
            value={serverType} 
            onChange={(e) => setServerType(e.target.value)}
            className="vpn-select"
          >
            <option value="basic">Базовый</option>
            <option value="premium">Премиум</option>
            <option value="dedicated">Выделенный</option>
          </select>
        </div>

        {/* Расположение сервера */}
        <div className="option">
          <label><FaMapMarkerAlt /> Расположение сервера</label>
          <select 
            value={location} 
            onChange={(e) => setLocation(e.target.value)}
            className="vpn-select"
          >
            <option value="US">США</option>
            <option value="EU">Европа</option>
            <option value="Asia">Азия</option>
            <option value="AU">Австралия</option>
          </select>
        </div>

        {/* Протокол */}
        <div className="option">
          <label><FaLock /> Протокол VPN</label>
          <select 
            value={protocol} 
            onChange={(e) => setProtocol(e.target.value)}
            className="vpn-select"
          >
            <option value="OpenVPN">OpenVPN</option>
            <option value="WireGuard">WireGuard</option>
            <option value="IPSec">IPSec</option>
            <option value="PPTP">PPTP</option>
          </select>
        </div>

        {/* Шифрование */}
        <div className="option">
          <label><FaLock /> Шифрование</label>
          <input 
            type="number" 
            value={encryption} 
            onChange={(e) => setEncryption(Math.min(Math.max(e.target.value, 0), 100))} // Ограничиваем диапазон от 0 до 100
            className="vpn-input"
            placeholder="Шифрование (0-100%)"
            max="100"
            min="0"
          />
          <span>%</span>
        </div>

        {/* Логин */}
        <div className="option">
          <label><FaKey /> Логин</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            className="vpn-input" 
            placeholder="Введите логин"
          />
        </div>

        {/* Пароль */}
        <div className="option">
          <label><FaKey /> Пароль</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="vpn-input" 
            placeholder="Введите пароль"
          />
        </div>

        {/* Лимит подключений */}
        <div className="option">
          <label><FaUsers /> Лимит подключений</label>
          <input 
            type="number" 
            value={connectionLimit} 
            onChange={(e) => setConnectionLimit(Math.min(Math.max(e.target.value, 1), 100))} // Ограничиваем диапазон от 1 до 100
            className="vpn-input" 
            min="1" 
            max="100"
          />
          <span>%</span>
        </div>
      </div>

      <div className="vpn-footer">
        <button className="save-button" onClick={handleSaveSettings}>
          Сохранить настройки
        </button>
      </div>
    </div>
  );
};

export default VPNSetup;