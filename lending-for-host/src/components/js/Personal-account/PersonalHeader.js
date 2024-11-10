import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './PersonalPage.scss';

function PersonalHeader({ setCurrentMenu, logout, user }) {
    const { t } = useTranslation();
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const navigate = useNavigate();

    const toggleProfileMenu = () => {
        setShowProfileMenu(!showProfileMenu);
    };

    const handleLogoClick = () => {
      navigate('/HomePage');
  };

  return (
  <div className="header-personal">
    <Container>
      <Navbar.Collapse id="navbar-nav">
        <div className="container-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <div className="logo"></div>
            <Navbar.Brand>{t('brand')}</Navbar.Brand>
          </div>
      </Navbar.Collapse>
    </Container>
  </div>
  );
}

export default PersonalHeader;