import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Import your CSS here
import App from './App'; // Your main app component

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
