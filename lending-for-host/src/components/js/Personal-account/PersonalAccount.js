import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Sidebar from './PersonalSidebar';
import Header from './PersonalHeader';
import Profile from './Menu/users/Profile';
import Referral from './Menu/users/Referral';
import Services from './Menu/users/Services';
import Dashboard from './Menu/Dashboard';
import Settings from './Menu/users/Settings';
import Transactions from './Menu/Transactions';
import PayersPage from './Menu/users/PayersPage';
import CartPage from './Menu/users/CartPage';
import PaymentMethods from './Menu/users/PaymentMethods';
import VPNService from './Menu/servicelist/VPNService';
import VDSService from './Menu/servicelist/VDSService';
import VPSService from './Menu/servicelist/VPSService';
import CloudPanelService from './Menu/servicelist/CloudPanelService';
import DomainService from './Menu/servicelist/DomainService';
import Statistics from './Menu/Statistics';
import Servers from './Menu/servicelist/Servers';

function PersonalAccount() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Загрузка состояния из localStorage, если оно есть
  const savedMenu = localStorage.getItem('currentMenu') || 'profile';
  const [currentMenu, setCurrentMenu] = useState(savedMenu);

  useEffect(() => {
    // Сохранение состояния в localStorage при изменении currentMenu
    localStorage.setItem('currentMenu', currentMenu);

    // Очистка стилей body при монтировании компонента
    document.body.style.overflowY = 'hidden';
    document.body.style.padding = '0';

    return () => {
      document.body.style.overflowY = '';
      document.body.style.padding = '';
    };
  }, [currentMenu]); // Будет вызываться при изменении currentMenu

  const user = {
    name: 'Иван Иванов',
    email: 'ivan.ivanov@example.com',
    createdAt: '2023-06-01',
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const handleSelect = (menu) => {
    setCurrentMenu(menu);
  };

  return (
    <div className="container-Personal-Account">
      <Sidebar onSelect={handleSelect} />
      <div className="menu-container">
        <Header />
        <div className="menu-body-container">
          {currentMenu === 'profile' && <Profile />}
          {currentMenu === 'referral' && <Referral />}
          {currentMenu === 'PayersPage' && <PayersPage />}
          {currentMenu === 'CartPage' && <CartPage />}
          {currentMenu === 'services' && <Services />}
          {currentMenu === 'dashboard' && <Dashboard />}
          {currentMenu === 'transactions' && <Transactions />}
          {currentMenu === 'settings' && <Settings />}
          {currentMenu === 'payment-methods' && <PaymentMethods />}
          {currentMenu === 'vpn' && <VPNService />}
          {currentMenu === 'vps' && <VPSService />}
          {currentMenu === 'vds' && <VDSService />}
          {currentMenu === 'cloud-panel' && <CloudPanelService />}
          {currentMenu === 'domains' && <DomainService />}
          {currentMenu === 'statistics' && <Statistics />}
          {currentMenu === 'servers' && <Servers />}
        </div>
      </div>
    </div>
  );
}

export default PersonalAccount;