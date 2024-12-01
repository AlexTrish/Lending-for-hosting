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
        // Проверяем наличие данных пользователя в localStorage
        const storedUser = localStorage.getItem('user');
        const expiresAt = localStorage.getItem('expiresAt');

        if (storedUser && expiresAt && new Date().getTime() < new Date(expiresAt).getTime()) {
            // Если данные есть и они не просрочены, сохраняем их в состояние
            setUser(JSON.parse(storedUser));
        } else {
            localStorage.removeItem('user');
            localStorage.removeItem('expiresAt');
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
    
        try {
            const response = await fetch('https://cp.retry.host/billmgr?', { 
                method: 'POST',
                body: JSON.stringify({ 
                    func: 'auth',
                    forget: 'on',
                    username: `${identifier}`,
                    password: `${password}`,
                    lang: 'ru',
                    out: 'xjson'
                }),
            });
    
            // Проверка статуса ответа
            if (!response.ok) {
                throw new Error('Server responded with an error: ' + response.statusText);
            }
    
            // Попытка парсинга JSON
            const data = await response.json();
    
            if (data.doc && data.doc.auth && data.doc.auth.$id) {
                const userData = {
                    $id: data.doc.auth.$id
                };
    
                const expiresAt = new Date();
                expiresAt.setDate(expiresAt.getDate() + 7); // Устанавливаем срок на 7 дней
    
                // Сохраняем данные без шифрования
                localStorage.setItem('user', JSON.stringify(userData));
                localStorage.setItem('expiresAt', expiresAt);
    
                setUser(userData); // Обновляем состояние
                navigate('/personal-account'); // Редирект
            } else {
                setError(t('form-sign-in.authError'));
            }
        } catch (error) {
            console.error('Error during API request:', error);
            setError(t('form-sign-in.serverError'));
        }
    };
    

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('expiresAt');
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