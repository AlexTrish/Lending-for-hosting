import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar, Container, Alert, Button } from 'react-bootstrap';
import Footer from '../components/js/Footer';
import { useNavigate } from 'react-router-dom';
import '../components/css/page.scss';

function LoginPage() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Проверяем наличие данных пользователя в sessionStorage
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.post('https://enapihost.retry.host/billmgr?', new URLSearchParams({
                func: 'auth',
                out: 'json',
                forget: 'on',
                username: identifier,
                password: password,
                lang: 'ru',
            }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            if (response.data?.doc?.auth?.$id) {
                const token = response.data.doc.auth.$id;
                sessionStorage.setItem('login', JSON.stringify(identifier));
                sessionStorage.setItem('password', JSON.stringify(password));
                sessionStorage.setItem('user', JSON.stringify(token));

                navigate('/personal-account');
            } else {
                setError(t('form-sign-in.authError'));
            }
        } catch (error) {
            console.error('Error during API request:', error);
            setError(t('form-sign-in.serverError'));
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('login');
        sessionStorage.removeItem('password');
        setUser(null);
        navigate('/');
    };

    return (
        <div className="login-page">
            <Container>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <div className="container-logo" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                        <div className="logo"></div>
                        <Navbar.Brand>{t('brand')}</Navbar.Brand>
                    </div>
                </Navbar.Collapse>
            </Container>

            {user ? (
                <div className="text-center">
                    <h3>{t('form-sign-in.welcome', { name: user.username })}</h3>
                    <Button onClick={handleLogout} className="btn btn-danger">
                        {t('form-sign-in.logout')}
                    </Button>
                </div>
            ) : (
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
                            <p className="mb-0">
                                У вас нет аккаунта? <a href="/register">Зарегистрироваться</a>
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default LoginPage;