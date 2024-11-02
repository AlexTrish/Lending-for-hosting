import React from 'react';
import Header from './components/js/Header';
import Content_main from './components/js/Content_main';
import Content_1 from './components/js/Content_1';
import Content_2 from './components/js/Content_2';
import Content_3 from './components/js/Content_3';
import Content_4 from './components/js/Content_4';
import Footer from './components/js/Footer';

function App() {
    return (
        <div className="app">
            <Header />
            <Content_main />
            <Content_1 />
            <Content_2 />
            <Content_3 />
            <Content_4 />
            <Footer />
        </div>
    );
}

export default App;