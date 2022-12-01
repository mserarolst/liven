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
import PagesAdmin from './views/Admin/Pages/PagesAdmin';
import PageSelect from './views/Admin/Pages/PageSelect';
import Sustainability from './views/Sustainability/Sustainability';

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
            { path: '/sustainability', element: <Sustainability />}
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
            { path: '/administracio/product-families/:id/filters', element: <Filters /> },
            { path: '/administracio/product-families/:id/filter/nou', element: <AddFilters /> },
            { path: '/administracio/claims', element: <Claims /> },
            { path: '/administracio/claims/nou', element: <AddClaims /> },
            { path: '/administracio/product-families/:id_pf/filters/:id_f/value', element: <Values /> },
            { path: '/administracio/product-families/:id_pf/filters/:id_f/value/nou', element: <AddValues /> },
            { path: '/administracio/product-families/:id_pf/filters/:id_f/value/:id_v/products', element: <ProductsAdmin /> },
            { path: '/administracio/product-families/:id_pf/filters/:id_f/value/:id_v/products/nou', element: <AddProduct /> },
            { path: '/administracio/products', element: <ProductsAdmin /> },
            { path: '/administracio/products/nou', element: <AddProduct /> },
            { path: '/administracio/pages', element: <PagesAdmin /> },
            { path: '/administracio/pages/:id', element: <PageSelect /> },
        ],
    },
];

export default routes;
