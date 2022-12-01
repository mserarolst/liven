import React from 'react';
import { List } from '@mui/material';
import NavItem from './NavItem';
import WebIcon from '@mui/icons-material/Web';
import FactoryIcon from '@mui/icons-material/Factory';

const NavBar = () => {
    const items = [
        {
            href: '/administracio/product-families',
            icon: FactoryIcon,
            title: 'Product families',
        },
        {
            href: '/administracio/claims',
            icon: FactoryIcon,
            title: 'Claims',
        },
        {
            href: '/administracio/products',
            icon: FactoryIcon,
            title: 'Products',
        },
        {
            href: '/administracio/pages',
            icon: WebIcon,
            title: 'Pages',
        },

    ];

    return (
        <List>
            {items?.map((item) => (
                <NavItem
                    href={item.href}
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                />
            ))}
        </List>
    );
};

export default NavBar;
