import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar, Container, Alert, Button, Form, Row, Col } from 'react-bootstrap';
import Footer from '../components/js/Footer';
import { useNavigate } from 'react-router-dom'; // Для редиректа
import '../components/css/page.scss';

function LoginPage() {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { t } = useTranslation();
    const navigate = useNavigate(); // Хук для навигации

    useEffect(() => {
        // Устанавливаем стиль overflow-y: hidden на body при загрузке LoginPage
        document.body.style.overflowY = 'hidden';

        // Очищаем стиль при уходе с этой страницы
        return () => {
            document.body.style.overflowY = ''; // сбросить стиль при уходе с страницы
        };
    }, []);

    // Функция для отправки данных авторизации
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // очищаем старые ошибки

        if (!identifier || !password) {
            setError(t('form-sign-in.username') + ' или ' + t('form-sign-in.password') + ' ' + t('form-sign-in.requiredFields'));
            return;
        }

        // Логика авторизации, замените на ваш API
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ identifier, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // После успешной авторизации переходим на страницу Dashboard
                navigate('/HomePage'); // редирект на Dashboard
            } else {
                // Если ошибка авторизации
                setError(data.message || t('form-sign-in.authError'));
            }
        } catch (err) {
            setError(t('form-sign-in.connectionError'));
        }
    };

    // Функция для редиректа на Dashboard при клике на логотип
    const handleLogoClick = () => {
        navigate('/'); // редирект на Dashboard
    };

    return (
        <div className="login-page">
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
                <div className="card-body">
                    <h3>{t('form-sign-in.registerTitle')}</h3>

                    {error && (
                        <Alert variant="danger" className="mb-4">
                            {error}
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="identifier" className="form-label">
                                {t('form-sign-in.username')}
                            </label>
                            <input
                                type="text"
                                id="identifier"
                                className="form-control"
                                placeholder={t('form-sign-in.usernamePlaceholder')}
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">
                                {t('form-sign-in.password')}
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder={t('form-sign-in.passwordPlaceholder')}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <Button type="submit" className="btn btn-success w-100">
                            {t('form-sign-in.login')}
                        </Button>
                    </form>

                    <div className="mt-3 text-center">
                        <p className="mb-0">У вас нет аккаунта? <a href="/register">Зарегистрироваться</a></p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default LoginPage;
