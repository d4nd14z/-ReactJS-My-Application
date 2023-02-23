import React from 'react';
import ReactDOM from 'react-dom/client';
import { Login } from './components/Login';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Login title="My First React App" subtitle="Back to your-app.com"/>
  </React.StrictMode>
);
