import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import React, { useEffect, useState } from 'react';
import '../../../static/css/MenuLiven/MenuLiven.css';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import logo from '../../../static/logos/liven/logo.svg';
import useScrollPosition from '../../components/useScrollPosition';
import LivenIcon from '../../components/Icons/LivenIcon';

const MenuLiven = (props) => {
    const navItems = [
        {title: 'HOME', link: '/'}, 
        // {title: 'COMPANY', link: '/company'}, 
        // {title: 'COMMITMENT', link: '/commitent'}, 
        {title: 'PRODUCTS', link: '/products'}, 
        // {title: 'PEOPLE', link: '/people'}, 
        // {title: 'SHARING VOICES', link: '/sharing-voices'}, 
        // {title: 'CONTACT', link: '/contact'}
    ];
    const [translateLogo, setTranslateLogo] = useState('');
    const [colorMenu, setColorMenu] = useState('');
    const [colorLogo, setColorLogo] = useState('');

    const scrollPosition = useScrollPosition();

    useEffect(() => {
        if (scrollPosition > 0 && translateLogo != ' logo-translated') {
            setTranslateLogo(' logo-translated');
            setColorMenu(' menu-white');
            setColorLogo(' Menu-logo-black');
        } else if (scrollPosition == 0) {
            setTranslateLogo(' logo-initial');
            setColorMenu(' menu-transparent');
            props.location == "/products" ? setColorLogo(' Menu-logo-black') : setColorLogo(' Menu-logo-white');
        }
    }, [scrollPosition]);

    useEffect(() => {
        setTranslateLogo(' logo-initial');
        setColorMenu(' menu-transparent');
        props.location == "/products" ? setColorLogo(' Menu-logo-black') : setColorLogo(' Menu-logo-white');
        props.setOpen(false);
    }, [props.location]);

    const Desplegable = () => {
        return (
            <Box className={'MenuLiven-container ' + (props.open ? 'opened' : '')}>
                <Box className='MenuLiven-container-title'>
                    <Typography variant='h2'>What are you looking for?</Typography>
                    <div className='MenuLiven-container-title-line'></div>
                </Box>
                <Box className='MenuLiven-container-items'>
                    {navItems.map((item) => (
                        <ItemMenu item={item}/>
                    ))}
                </Box>
            </Box>
        )
    }

    const ItemMenu = (props) => {
        return (
            <div className='MenuLiven-ItemMenu'>
                <Link to={props.item.link} className='link'>
                    <Typography variant='h3'>{props.item.title}</Typography>
                </Link>
            </div>
        )
    }

    function onClickMenu() {
        if (props.open) {
            if (scrollPosition > 0) {
                props.setOpen(!props.open);
            } else {
                setTranslateLogo(' logo-initial');
                setColorMenu(' menu-transparent');
                setColorLogo(' Menu-logo-white');
                props.setOpen(!props.open);
            }
            
        } else {
            if (scrollPosition > 0) {
                props.setOpen(!props.open);
            } else {
                setTranslateLogo(' logo-translated');
                setColorMenu(' menu-white');
                setColorLogo(' Menu-logo-black');
                setTimeout(() => {
                    props.setOpen(!props.open);
                }, 1000);
            }
        }
    }

    
    return (
        <div>
            <div className={'MenuLiven-topbar'+colorMenu}>
                <div id="LogoPage" className={"MenuLiven-logo" + translateLogo}><LivenIcon width={'200px'} extraClass={"Menu-logo"+colorLogo}/></div>
                <div className='MenuLiven-container-hamburger' onClick={onClickMenu}>
                    {props.open ? <CloseIcon sx={{width:'2em', height:'2em', cursor:'pointer'}} htmlColor='#555448'/> : <MenuIcon className={'MenuLiven-hamburguer'+colorLogo} sx={{width:'2em', height:'2em', cursor:'pointer'}}/>}
                </div>
            </div>
            <Desplegable/>
        </div>
    );

    
};

export default MenuLiven;
