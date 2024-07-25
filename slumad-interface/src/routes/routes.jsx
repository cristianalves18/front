import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importando o Router, Route e Routes
import { Login } from '../containers/Login';
import { Carregamento } from '../containers/Carregamento';
import { Register } from '../containers/Register';
import { Home } from '../containers/Home';

import PrivateRoute from './private-route';

export function AppRoutes() {
    return (
        <Router>
            <Routes>

                <Route element={<Carregamento />} path="/loading" />
                <Route element={<Login />} path="/login" />
                <PrivateRoute exact element={<Home />} path="/" />
                <Route element={<Register />} path="/register" />
            </Routes>

        </Router>
    );
}

