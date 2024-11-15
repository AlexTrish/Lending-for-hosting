import React, { useState } from 'react';
import { FaUser, FaUsers, FaCogs, FaChartLine, FaRegHandshake, FaCoins, FaBoxOpen, FaShoppingCart, FaDollarSign, FaCog, FaServer, FaCloud, FaGlobe, FaPercentage, FaClipboardList, FaWallet, FaShoppingBag, FaLock } from 'react-icons/fa';
import './PersonalPage.scss';

const Sidebar = ({ onSelect }) => {
  const [isClientsOpen, setIsClientsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

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
        {/* Клиенты */}
        <button onClick={() => setIsClientsOpen(!isClientsOpen)} className="accordion-button">
          <FaUsers className="sidebar-icon" />
          Клиенты
        </button>
        {isClientsOpen && (
          <div className="submenu">
            <button onClick={() => onSelect('profile')}>
              <FaUser className="sidebar-icon" />
              Профиль
            </button>
            <button onClick={() => onSelect('payers')}>
              <FaWallet className="sidebar-icon" />
              Плательщики
            </button>
            <button onClick={() => onSelect('referral')}>
              <FaRegHandshake className="sidebar-icon" />
              Реферальная программа
            </button>
            <button onClick={() => onSelect('cart')}>
              <FaShoppingCart className="sidebar-icon" />
              Корзина
            </button>
            <button onClick={() => onSelect('orders')}>
              <FaClipboardList className="sidebar-icon" />
              Заказы
            </button>
            <button onClick={() => onSelect('payment-methods')}>
              <FaDollarSign className="sidebar-icon" />
              Способы оплаты
            </button>
            <button onClick={() => onSelect('discounts')}>
              <FaPercentage className="sidebar-icon" />
              Скидки
            </button>
            <button onClick={() => onSelect('user-settings')}>
              <FaCog className="sidebar-icon" />
              Настройки пользователя
            </button>
          </div>
        )}

        {/* Товары/Услуги */}
        <button onClick={() => setIsProductsOpen(!isProductsOpen)} className="accordion-button">
          <FaBoxOpen className="sidebar-icon" />
          Товары/Услуги
        </button>
        {isProductsOpen && (
          <div className="submenu">
            <button onClick={() => onSelect('servers')}>
              <FaServer className="sidebar-icon" />
              Абузоустойчивые сервера
            </button>
            <button onClick={() => onSelect('vps')}>
              <FaCloud className="sidebar-icon" />
              VPS
            </button>
            <button onClick={() => onSelect('vds')}>
              <FaCloud className="sidebar-icon" />
              VDS
            </button>
            <button onClick={() => onSelect('vpn')}>
              <FaLock className="sidebar-icon" />
              VPN
            </button>
            <button onClick={() => onSelect('cloud-panel')}>
              <FaCloud className="sidebar-icon" />
              Cloud-Panel
            </button>
            <button onClick={() => onSelect('domains')}>
              <FaGlobe className="sidebar-icon" />
              Домены
            </button>
          </div>
        )}

        {/* Другие разделы */}
        <button onClick={() => onSelect('transactions')}>
          <FaCoins className="sidebar-icon" />
          Транзакции
        </button>
        <button onClick={() => onSelect('support')}>
          <FaRegHandshake className="sidebar-icon" />
          Поддержка
        </button>
        <button onClick={() => onSelect('statistics')}>
          <FaChartLine className="sidebar-icon" />
          Статистика
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
