// src/components/js/Header.js
import React, { useContext, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { ThemeContext, themes } from './theme/ThemeContext';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import '../css/styles.scss';

function Header({ setCurrentMenu }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate(); // Инициализируем navigate для редиректа

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  const handleProf = () => {
    navigate('/personal-account');
  };

  return (
    <div className="header">
      <Navbar>
        <Container>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <div className='container-logo'>
              <div className="logo"></div>
              <Navbar.Brand>{t('brand')}</Navbar.Brand>
            </div>
            <div className='nav-container-wrapper'>
              <Nav className="me-auto">
                <Nav.Link className='home-link' onClick={() => setCurrentMenu('Main')}>{t('menu.main')}</Nav.Link>
                <NavDropdown className='services-link' title={t("menu.services")} id="services-dropdown">
                  <NavDropdown.Item onClick={() => setCurrentMenu('VPS')}>{t("menu.vps")}</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setCurrentMenu('VDS')}>{t("menu.vds")}</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setCurrentMenu('VPN')}>{t("menu.vpn")}</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setCurrentMenu('domains')}>{t("menu.domains")}</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setCurrentMenu('cl-pn')}>{t("menu.cloudPanel")}</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setCurrentMenu('bulletproof')}>{t("menu.bulletproof")}</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className='referal-link' onClick={() => setCurrentMenu('referal')}>{t("menu.referral")}</Nav.Link>
                <NavDropdown className='about-link' title={t("menu.about")} id="about-dropdown">
                  <NavDropdown.Item onClick={() => setCurrentMenu('rules')}>{t("menu.rules")}</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleProf}>{t("menu.terms")}</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <div className='btn-container-wrapper'>
                <button id="switch-language" className='sidebar-icon' onClick={toggleLanguage}>
                  {i18n.language === 'ru' ? 'EN' : 'RU'}
                </button>
                <button id="settings-ico" className="sidebar-icon" onClick={() => setTheme(theme === themes.dark ? themes.light : themes.dark)}>
                  <div className='bi-fill'></div>
                </button>
                <button className="btn auth-btn" onClick={handleLoginClick}>{t("menu.auth")}</button> {/* Обновлено для перехода на /login */}
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
