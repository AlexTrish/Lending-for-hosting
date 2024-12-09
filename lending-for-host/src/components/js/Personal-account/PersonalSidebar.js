import React, { useState, useEffect, useContext } from 'react';
import { FaUser, FaUsers, FaDatabase, FaChartLine, FaRegHandshake, FaCoins, FaBoxOpen, FaShoppingCart, FaDollarSign, FaServer, FaCloud, FaGlobe, FaClipboardList, FaWallet, FaShieldAlt, FaSignOutAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../theme/ThemeContext';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate для редиректа
import './PersonalPage.scss';

const Sidebar = ({ onSelect }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const [isClientsOpen, setIsClientsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Управление загрузкой
  const [error, setError] = useState(null); // Управление ошибками
  const [userName, setUserName] = useState('Загрузка...');
  const [balance, setBalance] = useState('...');
  const navigate = useNavigate(); // Инициализируем navigate

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);

       // Получаем данные из sessionStorage
        const Token = sessionStorage.getItem('sessionToken'); // Пример ключа, поменяйте на ваш
        const sessionUserLogin = sessionStorage.getItem('login');
        const sessionUserPassword = sessionStorage.getItem('password');
      
        const token = JSON.parse(Token);
        const userLogin = JSON.parse(sessionUserLogin);
        const userPassword = JSON.parse(sessionUserPassword);
      
        console.log('Token:', token);
        console.log('Login:', userLogin);
        console.log('Password:', userPassword);
      
        if (!token || !userLogin || !userPassword) { // Здесь заменяем sessionToken на token
          console.error('Не найдены данные в sessionStorage');
          setError('Не найдены данные в хранилище сессии');
          setLoading(false);
          return;
        }
      
        try {
          const response = await fetch(`https://cp.retry.host/billmgr?`, {
            method: 'POST',
            body: new URLSearchParams({
              authinfo: `${userLogin}:${userPassword}`,
              func: 'subaccount',
              out: 'json',
              lang: 'ru',
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

  // Обработчик выхода из аккаунта
  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

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

        {/* Кнопка выхода */}
        <button onClick={handleLogout} className="logout-button">
          <FaSignOutAlt className="sidebar-icon" />
          Выйти
        </button>
      </div>
    </div>
  );
};

export default Sidebar;