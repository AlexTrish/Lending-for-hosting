import React, { useState, useContext } from 'react';
import { FaCog, FaGlobe, FaSun, FaMoon } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { ThemeContext, themes } from './theme/ThemeContext';
import '../css/FABButton.scss';

const FABButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAB = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  return (
    <div className="fab-container">
      <button className="fab-button" onClick={toggleFAB}>
        <FaCog />
      </button>

      {isOpen && (
        <div className="fab-options">
          <button className="fab-option" onClick={toggleLanguage}>
            <FaGlobe />
            <span>{i18n.language === 'ru' ? 'EN' : 'RU'}</span>
          </button>
          <button className="fab-option" onClick={toggleTheme}>
            {theme === themes.dark ? <FaSun /> : <FaMoon />}
            <span>{theme === themes.dark ? t('lightTheme') : t('darkTheme')}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FABButton;