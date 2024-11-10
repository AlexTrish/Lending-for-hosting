// src/pages/RegisterPage.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {  Navbar, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/js/Footer';
import '../components/css/page.scss';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { t } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        // Устанавливаем стиль overflow-y: hidden на body при загрузке LoginPage
        document.body.style.overflowY = 'hidden';

        // Очищаем стиль при уходе с этой страницы
        return () => {
            document.body.style.overflowY = ''; // сбросить стиль при уходе с страницы
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !email || !password || !confirmPassword) {
            setError('Пожалуйста, заполните все поля');
        } else if (password !== confirmPassword) {
            setError('Пароли не совпадают');
        } else {
            setError('');
            // Логика регистрации
        }
    };

    const handleLogoClick = () => {
        navigate('/'); // редирект на Dashboard
    };

    return (
        <div className="register-page">
            <Container>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <div className="container-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                        <div className="logo"></div>
                        <Navbar.Brand>{t('brand')}</Navbar.Brand>
                    </div>
                </Navbar.Collapse>
            </Container>
            <div className="card">
                <h3>Регистрация</h3>
                <div className="card-body">

                    {error && (
                        <Alert variant="danger" className="mb-4">
                            {error}
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Имя пользователя</label>
                            <input
                                type="text"
                                id="username"
                                className="form-control"
                                placeholder="Введите имя пользователя"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Электронная почта</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Введите электронную почту"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Пароль</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Введите пароль"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Подтверждение пароля</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="form-control"
                                placeholder="Подтвердите пароль"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn btn-success w-100">
                            Зарегистрироваться
                        </button>
                    </form>

                    <div className="mt-3 text-center">
                        <p className="mb-0">Уже есть аккаунт? <a href="/login">Войти</a></p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default RegisterPage;