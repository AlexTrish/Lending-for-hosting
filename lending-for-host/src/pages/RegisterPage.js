import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../components/css/page.scss';

function RegisterPage() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [setUser] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
    
    
        try {
            const response = await fetch('https://enapihost.retry.host/billmgr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    need_manual_action: '',
                    email_exists: '',
                    socnetwork_account_exist: '',
                    realname: `${username}`,
                    recaptcha_type: '',
                    _ga: '',
                    _ym_uid: '',
                    email: `${email}`,
                    project: '1',
                    partner: '',
                    sesid: '',
                    currency_fromsite: '',
                    redirect_params: '',
                    redirect_auth: '',
                    tzoffset: '',
                    passwd: `${password}`,
                    confirm: `${confirmPassword}`,
                    country: '1',
                    state: '',
                    field_2: 'on',
                    sfromextform: 'yes',
                    newwindow: 'extform',
                    func: 'register',
                    sok: 'ok',
                    elid: '',
                    clicked_button: 'ok',
                    out: 'xjson',
                }),
            });
    
            const responseText = await response.json();
    
            if (!response.ok) {
                throw new Error(`Server responded with status ${response.status}`);
            }

    
            // Проверка наличия ключа auth.$id
            if (responseText.doc?.auth?.$id) {
                const token = responseText.doc.auth.$id;
                sessionStorage.setItem('login', JSON.stringify(email));
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
                        <button className="google-auth" onClick={handleGoogleSignUp}><FaGoogle /></button>
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