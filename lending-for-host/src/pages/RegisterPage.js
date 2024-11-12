import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa'; // Импорт иконки Google
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Импорт иконок для видимости пароля
import '../components/css/page.scss';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Стейт для видимости пароля
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Стейт для видимости подтверждения пароля
    const [error, setError] = useState('');
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!username || !email || !password || !confirmPassword) {
            setError('Пожалуйста, заполните все поля');
            return;
        }
    
        if (password !== confirmPassword) {
            setError('Пароли не совпадают');
            return;
        }
    
        setError('');
    
        try {
            console.log('Отправка запроса на регистрацию...');
    
            // Создание URL с параметрами
            const url = new URL('https://cp.retry.host/');
            const params = new URLSearchParams();
            
            params.append('_ga', '');
            params.append('_ym_uid', '');
            params.append('clicked_button', 'ok');
            params.append('confirm', '*');
            params.append('country', '15');
            params.append('currency_fromsite', '126');
            params.append('email', email);
            params.append('email_exists', '');
            params.append('field_2', 'on');
            params.append('func', 'register');
            params.append('need_manual_action', '');
            params.append('newwindow', 'extform');
            params.append('out', 'xjson');
            params.append('partner', '');
            params.append('passwd', password);
            params.append('project', '1');
            params.append('realname', username);
            params.append('recaptcha_type', '');
            params.append('redirect_auth', '');
            params.append('redirect_params', '');
            params.append('sesid', '');
            params.append('sfromextform', 'yes');
            params.append('socnetwork_account_exist', '');
            params.append('sok', 'ok');
            params.append('state', '');
            params.append('tzoffset', '180,0');
            params.append('lang', 'ru');
    
            // Добавление параметров в URL
            url.search = params.toString();
    
            // Выполнение GET запроса
            const response = await fetch(url, { method: 'GET' });
    
            const result = await response.json();
            console.log('Ответ сервера:', result);
    
            if (result.sok === 'ok') {
                navigate('/');
            } else {
                setError('Ошибка регистрации. Пожалуйста, проверьте данные и попробуйте снова.');
            }
        } catch (error) {
            console.error('Ошибка при соединении с сервером:', error);
            setError('Ошибка при соединении с сервером.');
        }
    };

    const handleGoogleSignUp = () => {
        window.location.href = 'https://your-auth-url.com/google'; // URL для авторизации через Google
    };

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
    };

    const handleLogoClick = () => {
        navigate('/');
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
                            <div className="input-group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    className="form-control"
                                    placeholder="Введите пароль"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span className="input-group-text" onClick={toggleShowPassword} style={{ cursor: 'pointer' }}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Подтверждение пароля</label>
                            <div className="input-group">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    className="form-control"
                                    placeholder="Подтвердите пароль"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <span className="input-group-text" onClick={toggleShowConfirmPassword} style={{ cursor: 'pointer' }}>
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-success w-100">
                            Зарегистрироваться
                        </button>
                    </form>

                    <div className="mt-3 text-center registr-cont">
                        <div className="line-container">
                            <span className="line"></span>
                            <p className="mb-0">Зарегистрируйтесь с помощью</p>
                            <span className="line"></span>
                        </div>
                        <a className="google-auth" onClick={handleGoogleSignUp}>
                            <FaGoogle />
                        </a>
                    </div>

                    <div className="mt-3 text-center">
                        <p className="mb-0">У вас уже есть аккаунт? <a href="/login">Авторизоваться</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
