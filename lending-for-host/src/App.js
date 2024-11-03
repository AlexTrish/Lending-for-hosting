import React, { useState } from 'react';
import Dashboard from './components/js/Dashboard';
import Header from './components/js/Header';
import Footer from './components/js/Footer';
import './components/css/styles.scss';

function App() {
    const [currentMenu, setCurrentMenu] = useState('Main');

    return (
        <div className="app">
            <Header setCurrentMenu={setCurrentMenu} />
            <Dashboard currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
            <Footer />
        </div>
    );
}

export default App;
