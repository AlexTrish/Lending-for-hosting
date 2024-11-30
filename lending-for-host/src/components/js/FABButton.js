import React, { useState, useContext } from 'react';
import { FaCog, FaGlobe, FaSun, FaMoon, FaCommentDots } from 'react-icons/fa'; // Иконка чата
import { useTranslation } from 'react-i18next';
import { ThemeContext, themes } from './theme/ThemeContext';
import '../css/FABButton.scss';

// Компонент чата
const ChatBox = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { user: 'support', text: 'Здравствуйте! Чем я могу вам помочь?' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { user: 'user', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className={`chat-box ${isOpen ? 'open' : ''}`}>
      <div className="chat-header">
        <h3>Чат с техподдержкой</h3>
        <button className="chat-close-btn" onClick={onClose}>×</button>
      </div>
      <div className="chat-body">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.user}`}>
              <span>{message.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Введите ваше сообщение..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Отправить</button>
      </div>
    </div>
  );
};

const FABButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false); // Состояние для чата

  const toggleFAB = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  const openSupportChat = () => {
    setIsChatOpen(true); // Открываем чат
  };

  const closeChat = () => {
    setIsChatOpen(false); // Закрываем чат
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
          <button className="fab-option" onClick={openSupportChat}>
            <FaCommentDots />
            <span>{t('chatSupport')}</span> {/* Перевод для чата */}
          </button>
        </div>
      )}

      {/* Выплывающий чат */}
      <ChatBox isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default FABButton;
