import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { ListItem, Typography, Link as LinkTo } from '@mui/material';
import navBarStyle from './NavBarStyle';

const NavItem = ({ title, to, closeMenu, ...rest }) => {
    const classes = navBarStyle();

    return (
        <ListItem className={classes.item} disableGutters {...rest}>
            <LinkTo
                className={classes.button}
                component={RouterLink}
                to={{
                    pathname: to,
                }}
                onClick={() => closeMenu()}
                underline="none"
            >
                <Typography variant="menu">{title}</Typography>
            </LinkTo>
        </ListItem>
    );
};

NavItem.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string,
    closeMenu: PropTypes.string,
};

export default NavItem;
