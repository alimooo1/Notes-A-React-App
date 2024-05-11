import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
// @ts-ignore
const appData = window.Telegram.WebApp;
console.log(appData)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);