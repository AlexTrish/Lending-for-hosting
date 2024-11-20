import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Sidebar from './PersonalSidebar';
import Header from './PersonalHeader';
import Footer from './PersonalFooter';
import Profile from './Menu/Profile';
import Referral from './Menu/Referral';
import Services from './Menu/Services';
import Dashboard from './Menu/Dashboard';
import Settings from './Menu/Settings';
import Transactions from './Menu/Transactions';
import PayersPage from './Menu/PayersPage';
import CartPage from './Menu/CartPage';
import PaymentMethods from './Menu/PaymentMethods';
import VPNService from './Menu/VPNService';
import VDSService from './Menu/VDSService';
import VPSService from './Menu/VPSService';
import CloudPanelService from './Menu/CloudPanelService';
import DomainService from './Menu/DomainService';
import Discounts from './Menu/Discounts';
import Support from './Menu/Support';
import Statistics from './Menu/Statistics';
import Servers from './Menu/Servers';

function PersonalAccount() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentMenu, setCurrentMenu] = useState('profile');

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    document.body.style.padding = '0';

    return () => {
      document.body.style.overflowY = '';
      document.body.style.padding = '';
    };
  }, []);

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
          {currentMenu === 'discounts' && <Discounts />}
          {currentMenu === 'support' && <Support />}
          {currentMenu === 'statistics' && <Statistics />}
          {currentMenu === 'servers' && <Servers />}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default PersonalAccount;
