import React, { useState } from 'react';
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch(`https://cp.retry.host/?authinfo=${identifier}:${password}&func=logon&sok=ok&out=json`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (data.success) {
                navigate('/');
            } else {
                setError(t('form-sign-in.authError'));
            }
        } catch (error) {
            setError(t('form-sign-in.serverError'));
        }
    };

    const handleLogout = () => {
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