// src/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
  false
);
  const [authSuccess, setAuthSuccess] = useState(true); // Добавляем состояние для успешной авторизации

  const login = () => {
    setIsAuthenticated(true);
    setAuthSuccess(true); // Устанавливаем, что авторизация прошла успешно
    setTimeout(() => setAuthSuccess(false), 3000);  // Скрыть уведомление через 3 секунды
  };

  const logout = () => {
    setIsAuthenticated(false);
    setAuthSuccess(false); // При выходе из системы скрываем уведомление
  };

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
}, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, authSuccess, login, logout, setAuthSuccess }}>
      {children}
    </AuthContext.Provider>
  );
}