import axios from 'axios';
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
            const response = await axios.get('https://enapihost.retry.host/', {
                params: {
                    _ga: '',
                    _ym_uid: '',
                    clicked_button: 'ok',
                    confirm: confirmPassword,
                    country: 15,
                    currency_fromsite: 126,
                    email: email,
                    email_exists: '',
                    field_2: 'on',
                    func: 'register',
                    need_manual_action: '',
                    newwindow: 'extform',
                    out: 'xjson',
                    partner: '',
                    passwd: password,
                    project: 1,
                    realname: username,
                    recaptcha_type: '',
                    redirect_auth: '',
                    redirect_params: '',
                    sesid: '',
                    sfromextform: 'yes',
                    socnetwork_account_exist: '',
                    sok: 'ok',
                    state: '',
                    tzoffset: '180,0',
                },
            });

            const responseText = response.data;

            if (response.status !== 200) {
                throw new Error(`Server responded with status ${response.status}`);
            }

            if (responseText.data?.doc?.auth?.$id) {
                const token = responseText.data.doc.auth.$id;
                sessionStorage.setItem('login', JSON.stringify(username));
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
                <h3>{t("form-sign-in.signUpTitle")}</h3>
                <div className="card-body">
                    {error && (
                        <Alert variant="danger" className="mb-4">
                            {error}
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">{t("form-sign-in.user")}</label>
                            <input
                                type="text"
                                id="username"
                                className="form-control"
                                placeholder={t("form-sign-in.userPlaceholder")}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">{t("form-sign-in.email")}</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder={t("form-sign-in.emailPlaceholder")}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">{t("form-sign-in.pass")}</label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    className="form-control"
                                    placeholder={t("form-sign-in.passPlaceholder")}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span className="input-group-text" onClick={toggleShowPassword} style={{ cursor: 'pointer' }}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">{t("form-sign-in.passConfirmation")}</label>
                            <div className="input-group">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    className="form-control"
                                    placeholder={t("form-sign-in.passConfirmationPlaceholder")}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <span className="input-group-text" onClick={toggleShowConfirmPassword} style={{ cursor: 'pointer' }}>
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-success w-100">
                            {t("form-sign-in.register")}
                        </button>
                    </form>

                    <div className="mt-3 text-center registr-cont">
                        <div className="line-container">
                            <span className="line"></span>
                            <p className="mb-0">{t("form-sign-in.signUpWith")}</p>
                            <span className="line"></span>
                        </div>
                        <button className="google-auth" onClick={handleGoogleSignUp}><FaGoogle /></button>
                    </div>

                    <div className="mt-3 text-center">
                        <p className="mb-0">{t("form-sign-in.haveAccount")} <a href="/login">{t("form-sign-in.registerTitle")}</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;