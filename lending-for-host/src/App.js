// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Импортируем роутинг
import Dashboard from './components/js/Dashboard';
import PersonalAccount from './components/js/Personal-account/PersonalAccount';
import LoginPage from './pages/LoginPage'; // Страница авторизации
import RegisterPage from './pages/RegisterPage'; // Страница регистрации
import './components/css/styles.scss';

function App() {
    const [currentMenu, setCurrentMenu] = useState('Main');

    useEffect(() => {
        localStorage.setItem('currentMenu', currentMenu);
    }, [currentMenu]);

    return (
        // <AuthProvider>
            <Router> {/* Оборачиваем приложение в Router */}
                <div className="app">                    
                    {/* Добавляем Routes для маршрутов */}
                    <Routes>
                        <Route
                            path="/login"
                            element={<LoginPage />}
                        />
                        <Route
                            path="/register"
                            element={<RegisterPage />}
                        />
                        <Route
                            path="/"
                            element={<Dashboard currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />} // Главная страница с дашбордом
                        />
                        <Route
                            path="/personal-account"
                            element={<PersonalAccount />}
                        />
                    </Routes>
                </div>
            </Router>
        // </AuthProvider>
    );
}

export default App;
