import React from 'react';
import { FaUser, FaUsers, FaCogs, FaChartLine, FaRegHandshake, FaCoins } from 'react-icons/fa';
import './PersonalPage.scss';

const Sidebar = ({ onSelect }) => {
  return (
    <div className="sidebar-container">
      <div className="Profile-container">
        <div className="img-container"></div>
        <div className="profile-info">
          <h3>UserName</h3>
          <div className="block-element">
            <p>Баланс:</p>
            <div className="green-block">
              <p>1234.00</p>
              <p className="rub">₽</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-header">
        <h2>Меню</h2>
      </div>
      <div className="line"></div>
      <div className="sidebar-menu">
        <button onClick={() => onSelect('profile')}>
          <FaUser className="sidebar-icon" />
          Профиль
        </button>
        <button onClick={() => onSelect('referral')}>
          <FaUsers className="sidebar-icon" />
          Приведи друга
        </button>
        <button onClick={() => onSelect('services')}>
          <FaRegHandshake className="sidebar-icon" />
          Мои услуги
        </button>
        <button onClick={() => onSelect('dashboard')}>
          <FaChartLine className="sidebar-icon" />
          Дашборд
        </button>
        <div className="line"></div>
        <button onClick={() => onSelect('transactions')}>
          <FaCoins className="sidebar-icon" />
          Транзакции
        </button>
        <button onClick={() => onSelect('settings')}>
          <FaCogs className="sidebar-icon" />
          Настройки
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
