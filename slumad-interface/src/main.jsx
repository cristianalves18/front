import React from 'react';
import ReactDOM from 'react-dom/client';

import { ToastContainer } from 'react-toastify';
import { Login } from "./containers/Login";
import { Carregamento } from "./containers/Carregamento";
import { Register } from "./containers/Register";
import { Home } from './containers/Home';
import GlobalStyle from './styles/globalStyles';


import { UserProvider } from './hooks/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
    <UserProvider>
      <Carregamento />
      <Login />
      <Register />
      <Home />
    </UserProvider>
    <ToastContainer theme='colored' />
  </>,

)
