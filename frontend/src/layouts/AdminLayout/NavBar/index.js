import React from 'react';
import { List } from '@mui/material';
import NavItem from './NavItem';
import {
    FeaturedPlayList,
    ShoppingBasket,
    ShoppingCart
} from '@mui/icons-material';
import StoreIcon from '@mui/icons-material/Store';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FemaleIcon from '@mui/icons-material/Female';
import WorkIcon from '@mui/icons-material/Work';
import WebIcon from '@mui/icons-material/Web';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const NavBar = () => {
    const items = [
        {
            href: '/administracio/lots',
            icon: ShoppingCart,
            title: 'Lots',
        },
        {
            href: '/administracio/productes',
            icon: ShoppingBasket,
            title: 'Productes',
        },
        {
            href: '/administracio/comandes',
            icon: StoreIcon,
            title: 'Comandes',
        },
        {
            href: '/administracio/dones',
            icon: FemaleIcon,
            title: 'Dones',
        },
        {
            href: '/administracio/actualitat',
            icon: MenuBookIcon,
            title: 'Actualitat',
        },
        {
            href: '/administracio/premsa',
            icon: FeaturedPlayList,
            title: 'Premsa',
        },
        {
            href: '/administracio/quefem',
            icon: WorkIcon,
            title: "Sector d'activitat",
        },
        {
            href: '/administracio/portada',
            icon: WebIcon,
            title: "Portada",
        },
        {
            href: '/administracio/quisom',
            icon: HistoryEduIcon,
            title: "Qui Som",
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
