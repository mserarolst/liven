import React from 'react';
import { List } from '@mui/material';
import NavItem from './NavItem';
import {
    FeaturedPlayList,
    ShoppingBasket,
    ShoppingCart
} from '@mui/icons-material';
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
