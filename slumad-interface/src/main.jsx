import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppRoutes } from './routes/routes';
import GlobalStyle from './styles/globalStyles';

import { ToastContainer } from 'react-toastify';
import { UserProvider } from './hooks/UserContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <UserProvider>
      <AppRoutes />
    </UserProvider>
    <GlobalStyle />
    <ToastContainer theme="colored" />
  </>,
);