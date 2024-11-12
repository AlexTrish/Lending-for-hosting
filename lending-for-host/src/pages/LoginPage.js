import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar, Container, Alert, Button } from 'react-bootstrap';
import Footer from '../components/js/Footer';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // импортируем библиотеку для работы с куки
import axios from 'axios'; // импортируем axios для выполнения запросов
import '../components/css/page.scss';

function LoginPage() {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            // Запрос на API для авторизации пользователя
            const response = await axios.post('https://cors-anywhere.herokuapp.com/https://cp.retry.host', null, {
                params: {
                    authinfo: `${identifier}:${password}`,
                    func: 'logon',
                    sok: 'ok',
                    out: 'json',
                },
                headers: {
                    'Accept': 'application/json',
                },
            });
    
            console.log(response); // Посмотреть полный ответ
    
            if (response.data && response.data.result === 'success') {
                // Сохраняем сессионный токен в куки
                Cookies.set('authToken', response.data.token, { expires: 7 });
                // Редирект на главную страницу
                navigate('/');
            } else {
                // Если авторизация не успешна, показываем ошибку
                setError(t('form-sign-in.invalidCredentials'));
            }
        } catch (error) {
            console.error('Ошибка авторизации:', error);
            setError(t('form-sign-in.errorOccurred'));
        }
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