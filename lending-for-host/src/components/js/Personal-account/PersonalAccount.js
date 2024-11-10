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

    // Данные пользователя (можно заменить на реальные данные из API)
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

    // Отображаем текущую страницу в зависимости от состояния
    return (
        <div className="container-Personal-Account">
          <Sidebar onSelect={handleSelect} />
          <div className="menu-container">
            <Header />
            <div className='menu-body-container'>
                {currentMenu === 'profile' && <Profile />}
                {currentMenu === 'referral' && <Referral />}
                {currentMenu === 'services' && <Services />}
                {currentMenu === 'dashboard' && <Dashboard />}
                {currentMenu === 'transactions' && <Transactions />}
                {currentMenu === 'settings' && <Settings />}
            </div>
            <Footer />
          </div>
        </div>
      );
    }

export default PersonalAccount;
