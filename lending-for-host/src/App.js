// src/App.js
import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Импортируем роутинг
import Dashboard from './components/js/Dashboard';
import Header from './components/js/Header';
import AuthHeader from './components/js/AuthHeader';
import Footer from './components/js/Footer';
import LoginPage from './pages/LoginPage'; // Страница авторизации
import RegisterPage from './pages/RegisterPage'; // Страница регистрации
import { AuthContext, AuthProvider } from './AuthContext';
import './components/css/styles.scss';

function App() {
    const [currentMenu, setCurrentMenu] = useState('Main');

    useEffect(() => {
        localStorage.setItem('currentMenu', currentMenu);
    }, [currentMenu]);

    return (
        <AuthProvider>
            <Router> {/* Оборачиваем приложение в Router */}
                <div className="app">
                    <AuthContext.Consumer>
                        {({ isAuthenticated }) =>
                            isAuthenticated ? (
                                <AuthHeader setCurrentMenu={setCurrentMenu} />
                            ) : (
                                <Header setCurrentMenu={setCurrentMenu} />
                            )
                        }
                    </AuthContext.Consumer>
                    
                    {/* Добавляем Routes для маршрутов */}
                    <Routes>
                        <Route
                            path="/login"
                            element={<LoginPage />} // Страница авторизации
                        />
                        <Route
                            path="/register"
                            element={<RegisterPage />} // Страница регистрации
                        />
                        <Route
                            path="/"
                            element={<Dashboard currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />} // Главная страница с дашбордом
                        />
                    </Routes>

                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
