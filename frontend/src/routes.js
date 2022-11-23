import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import PublicLayout from './layouts/PublicLayout';
import Home from './views/Home';
import Dash from './views/Admin/Dash'
import Products from './views/Products/Products';
import ProductFamilies from './views/Admin/ProductFamilies/ProductFamilies';
import AddProductFamilies from './views/Admin/ProductFamilies/AddProductFamilies';
import Claims from './views/Admin/Claims/Claims';
import AddClaims from './views/Admin/Claims/AddClaims';
import Filters from './views/Admin/Filters/Filters';
import AddFilters from './views/Admin/Filters/AddFilters';
import Values from './views/Admin/Values/Values';
import AddValues from './views/Admin/Values/AddValues';
import ProductsAdmin from './views/Admin/Products/ProductsAdmin';
import AddProduct from './views/Admin/Products/AddProduct';

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
        // element: user ? <AdminLayout /> : <Navigate to="/login" />,
        element: <AdminLayout />,
        children: [
            { path: '/administracio', element: <Dash /> },
            { path: '/administracio/product-families', element: <ProductFamilies /> },
            { path: '/administracio/product-families/nou', element: <AddProductFamilies /> },
            { path: '/administracio/product-families/filter/:id', element: <Filters /> },
            { path: '/administracio/product-families/filter/:id/nou', element: <AddFilters /> },
            { path: '/administracio/claims', element: <Claims /> },
            { path: '/administracio/claims/nou', element: <AddClaims /> },
            { path: '/administracio/filters/value/:id', element: <Values /> },
            { path: '/administracio/filters/value/:id/nou', element: <AddValues /> },
            { path: '/administracio/products', element: <ProductsAdmin /> },
            { path: '/administracio/products/nou', element: <AddProduct /> },
        ],
    },
];

export default routes;
