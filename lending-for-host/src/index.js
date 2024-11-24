import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from './components/js/theme/ThemeProvider'
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
