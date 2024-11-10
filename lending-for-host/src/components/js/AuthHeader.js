import React, { useState, useContext } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { ThemeContext, themes } from './theme/ThemeContext';
import { TbUserSquare } from 'react-icons/tb';
import { IoMdExit } from 'react-icons/io';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import '../css/styles.scss';

function AuthHeader({ setCurrentMenu, logout, user }) {
    const { t, i18n } = useTranslation();
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const { theme, setTheme } = useContext(ThemeContext);
    const navigate = useNavigate(); // Хук для навигации

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    const toggleProfileMenu = () => {
        setShowProfileMenu(!showProfileMenu);
    };

    // Проверка на наличие данных о пользователе
    const profileImage = user ? user.profileImage : ''; 
    const username = user ? user.username : ''; 
    const balance = user ? user.balance : '';

    const handleProfileClick = () => {
        navigate('/personal-account'); // Перенаправляем на страницу профиля
    };

    return (
        <Navbar className='navbar-after-auth'>
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
                                <NavDropdown.Item onClick={() => setCurrentMenu('terms')}>{t("menu.terms")}</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <div className='btn-container-wrapper'>
                            <button id="switch-language" className='sidebar-icon' onClick={toggleLanguage}>{i18n.language === 'ru' ? 'EN' : 'RU'}</button>
                            <button id="settings-ico" className="sidebar-icon" onClick={() => setTheme(theme === themes.dark ? themes.light : themes.dark)}><div className='bi-fill'></div></button>
                        </div>
                    </div>
                </Navbar.Collapse>
                {/* Profile Block */}
                <div className="profile-container" onClick={handleProfileClick}>
                    {profileImage ? (
                        <img src={profileImage} alt="Profile" className="profile-image" />
                    ) : (
                        <TbUserSquare className="profile-icon" />
                    )}
                    <div className='line'></div>
                    <button className='btn btn-exit'>
                        <IoMdExit className="exit-icons" />
                    </button>
                </div>
            </Container>
        </Navbar>
    );
}

export default AuthHeader;