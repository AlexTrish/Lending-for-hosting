// src/components/js/Header.js
import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { ThemeContext, themes } from './theme/ThemeContext';
import '../css/styles.scss';

function Header({ setCurrentMenu }) {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="header">
      <Navbar>
        <Container>
          <div className='container-logo'>
            <div className="logo"></div>
            <Navbar.Brand>RETRY HOST</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setCurrentMenu('Main')}>Главная</Nav.Link>
              <NavDropdown title="Услуги" id="services-dropdown">
                <NavDropdown.Item onClick={() => setCurrentMenu('VPS')}>Аренда VPS</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setCurrentMenu('VDS')}>Аренда VDS</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setCurrentMenu('VPN')}>Аренда VPN</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setCurrentMenu('domains')}>Домены</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setCurrentMenu('cl-pn')}>Cloud-Panel</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setCurrentMenu('bulletproof')}>Абузоустойчивые сервера</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => setCurrentMenu('referal')}>Реферальная программа</Nav.Link>
              <NavDropdown title="О нас" id="about-dropdown">
                <NavDropdown.Item onClick={() => setCurrentMenu('rules')}>Правила</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setCurrentMenu('terms')}>Условия</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <button id="switch-language" className='sidebar-icon'>Eng</button>  {/* title={t('lang-btn')} onClick={toggleLanguage}>{language === 'ru' ? 'EN' : 'RU'} */}
        <button id="settings-ico" className="sidebar-icon" onClick={() => setTheme(theme === themes.dark ? themes.light : themes.dark)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sun-fill" viewBox="0 0 16 16"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 24 24"><path class="cls-2" d="M12.3,22h-.1a10.31,10.31,0,0,1-7.34-3.15,10.46,10.46,0,0,1-.26-14,10.13,10.13,0,0,1,4-2.74,1,1,0,0,1,1.06.22,1,1,0,0,1,.24,1,8.4,8.4,0,0,0,1.94,8.81,8.47,8.47,0,0,0,8.83,1.94,1,1,0,0,1,1.27,1.29A10.16,10.16,0,0,1,19.6,19,10.28,10.28,0,0,1,12.3,22Z"/></svg>
        </button>
        <button className="btn auth-btn">Авторизоваться</button>
      </Navbar>
    </div>
  );
}

export default Header;
