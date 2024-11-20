import React, { useState, useEffect, useRef } from 'react';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';
import { FaPaperPlane, FaHeadset  } from 'react-icons/fa';

const ChatSupport = () => {
  // Состояние для хранения сообщений
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  // Ссылка для прокрутки чата вниз
  const messagesEndRef = useRef(null);

  // Функция для добавления нового сообщения
  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        text: newMessage,
        sender: 'User',
      };
      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage('');

      // Имитируем ответ от службы поддержки через 2 секунды
      setTimeout(() => {
        const response = {
          id: Date.now(),
          text: 'Support is here to help!',
          sender: 'Support',
        };
        setMessages((prevMessages) => [...prevMessages, response]);
      }, 2000);
    }
  };

  // Прокрутка чата вниз при добавлении нового сообщения
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div>
      {/* Кнопка для открытия чата */}
      <Button 
        variant="primary" 
        onClick={() => setShowChat(!showChat)} 
        style={{ position: 'fixed', bottom: '20px', right: '20px' }}
      >
        <FaHeadset /> {/* Иконка для открытия чата */}
      </Button>

      {/* Чат с поддержкой */}
      {showChat && (
        <div className="chat-container" style={chatContainerStyle}>
          <div className="chat-header" style={chatHeaderStyle}>
            <h5>Support Chat</h5>
            <Button variant="link" onClick={() => setShowChat(false)}>
              Close
            </Button>
          </div>
          <div className="chat-body" style={chatBodyStyle}>
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`message ${message.sender === 'User' ? 'user-message' : 'support-message'}`}
                style={messageStyle}
              >
                <p>{message.text}</p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-footer" style={chatFooterStyle}>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                style={inputStyle}
              />
              <Button variant="primary" onClick={sendMessage} style={sendButtonStyle}>
                <FaPaperPlane /> {/* Иконка на кнопке отправки */}
              </Button>
            </InputGroup>
          </div>
        </div>
      )}

      {/* Модальное окно для дополнительной информации */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Additional Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thank you for using our support chat!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

// Стиль для чата
const chatContainerStyle = {
  position: 'fixed',
  bottom: '4.5vw',
  right: '1vw',
  width: '16vw',
  height: '24vw',
  backgroundColor: 'var(--bg-color-prof-block)', // Используйте переменные для цветов
  border: '0.02vw solid var(--bg-color)',
  borderRadius: '0.5vw',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Добавим тень для лучшего восприятия
};

const chatHeaderStyle = {
  padding: '0.5vw',
  backgroundColor: 'var(--bg-color-service)',
  color: 'var(--h2-text-color)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTopLeftRadius: '0.5vw',  // Более плавные углы
  borderTopRightRadius: '0.5vw',
  fontSize: '1vw',
};

const chatBodyStyle = {
  padding: '1vw',
  overflowY: 'auto',
  flex: 1,
  fontSize: '1vw',
};

const chatFooterStyle = {
  padding: '0.5vw',
  borderTop: '1px solid #ddd',
  display: 'flex',
  alignItems: 'center',
};

const messageStyle = {
  padding: '0.8vw',
  marginBottom: '1vw',
  borderRadius: '0.8vw',
  backgroundColor: '#f1f1f1',
  maxWidth: '80%',
  wordWrap: 'break-word',
};

const inputStyle = {
  borderRadius: '0.5vw',
  padding: '1vw',
  width: '80%',
  border: '0.02vw solid var(--bg-color)',
  fontSize: '1vw',
};

const sendButtonStyle = {
  borderRadius: '50%',
  padding: '0.8vw',
  marginLeft: '0.8vw',
  backgroundColor: 'var(--bg-color-service)',
  border: 'none',
  cursor: 'pointer',
  color: 'white',
};

const userMessageStyle = {
  backgroundColor: '#e1f5fe',
  alignSelf: 'flex-start',
  borderRadius: '1vw',
  padding: '1vw',
  fontSize: '1vw',
};

const supportMessageStyle = {
  backgroundColor: '#d3e5f9',
  alignSelf: 'flex-end',
  borderRadius: '1vw',
  padding: '1vw',
  fontSize: '1vw',
};


export default ChatSupport;
