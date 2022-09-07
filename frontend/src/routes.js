import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import PublicLayout from './layouts/PublicLayout';
import Home from './views/Home';
import Dash from './views/Admin/Dash'
import Products from './views/Products/Products';

const routes = (user, isMobile) => [
    {
        path: '/',
        element: <PublicLayout />,
        children: [
            // {
            //     path: '/login',
            //     element: !user ? <Login /> : <Navigate to="/administracio" />,
            // },
            { path: '/', element: <Home /> },
            { path: '/products', element: <Products /> },
        ],
    },
    {
        path: '/administracio',
        element: user ? <AdminLayout /> : <Navigate to="/login" />,
        children: [
            { path: '/administracio', element: <Dash /> },
        ],
    },
];

export default routes;
