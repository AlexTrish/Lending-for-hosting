import React, { useState, useEffect, useContext } from 'react';
import { FaUser, FaUsers, FaDatabase, FaChartLine, FaRegHandshake, FaCoins, FaBoxOpen, FaShoppingCart, FaDollarSign, FaServer, FaCloud, FaGlobe, FaClipboardList, FaWallet, FaShieldAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { ThemeContext, themes } from '../theme/ThemeContext';
import './PersonalPage.scss';

const Sidebar = ({ onSelect }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const [isClientsOpen, setIsClientsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [userName, setUserName] = useState('Загрузка...');
  const [balance, setBalance] = useState('...');

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://lending.retry.host/api/test', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            url: 'https://cp.retry.host/billmgr?',
            func: 'dashboard',
            out: 'xjson',
          }),
        });

        const data = await response.json();

        if (data?.doc?.messages) {
          const userData = data.doc.messages;
          setUserName(userData.name);
          setBalance(userData.balance);
        }
      } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error);
        setUserName('Ошибка');
        setBalance('0.00');
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="sidebar-container">
      <div className="Profile-container">
        <div className="img-container"></div>
        <div className="profile-info">
          <h3>{userName}</h3>
          <div className="block-element">
            <p>Баланс:</p>
            <div className="green-block">
              <p>{balance}</p>
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
            {/* <button onClick={() => onSelect('profile')}>
              <FaUser className="sidebar-icon" />
              Профиль
            </button> */}
            <button onClick={() => onSelect('PayersPage')}>
              <FaWallet className="sidebar-icon" />
              Плательщики
            </button>
            <button onClick={() => onSelect('referral')}>
              <FaRegHandshake className="sidebar-icon" />
              Реферальная программа
            </button>
            <button onClick={() => onSelect('CartPage')}>
              <FaShoppingCart className="sidebar-icon" />
              Корзина
            </button>
            <button onClick={() => onSelect('services')}>
              <FaClipboardList className="sidebar-icon" />
              Заказы
            </button>
            <button onClick={() => onSelect('payment-methods')}>
              <FaDollarSign className="sidebar-icon" />
              Способы оплаты
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
              <FaDatabase className="sidebar-icon" />
              VPS
            </button>
            <button onClick={() => onSelect('vds')}>
              <FaServer className="sidebar-icon" />
              VDS
            </button>
            <button onClick={() => onSelect('vpn')}>
              <FaShieldAlt className="sidebar-icon" />
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
