import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

const NavItem = (props) => {
    const { href="", icon: Icon, title="" } = props;
    return (
        <ListItem button to={href} component={RouterLink}>
            <ListItemIcon>
                {Icon && <Icon size="20" color="primary" />}
            </ListItemIcon>
            <ListItemText primary={title} />
        </ListItem>
    );
};

export default NavItem;
