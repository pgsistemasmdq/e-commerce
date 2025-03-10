import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import CartWidget from '../cartWidget/CartWidget.jsx';
import logoImg from '../../assets/img/isologoNew60px.png'
import { useState } from 'react';
import { Link, NavLink } from "react-router-dom"
const menuItems = [
/*     
    { title: 'Categorias', options: ['Despensa', 'Frescos', 'Delikatessen'] },

    CAMBIE LA OPCIONES DEL MENU PARA QUE COICIDA CON LAS CATEGORIAS DE LA API fakestoreapi.com
 */
    { title: 'Categorias', options: ["Electronics", "Jewelery", "Men's clothing", "Women's Clothing"] },


];

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedMenu, setSelectedMenu] = useState(null);

    const handleMenuClick = (event, menuTitle) => {
        setAnchorEl(event.currentTarget);
        setSelectedMenu(menuTitle);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedMenu(null);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#B3E5FC' }}>
                <Toolbar>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Link to='/'>
                            <img src={logoImg} alt="Logo" style={{ height: 40, marginRight: 10 }} />
                        </Link>

                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: '"Bonheur Royale", cursive',
                                color: '#001F3F',
                                fontWeight: 'bold',
                                fontSize: '2rem',
                                marginRight: 4,
                                marginLeft: 4
                            }}
                        >
                            <Link to='/'>
                                Alimentos Gourmet
                            </Link>
                        </Typography>
                        {menuItems.map((menu) => (
                            <Box key={menu.title}>
                                <Button sx={{ color: '#001F3F' }} onClick={(event) => handleMenuClick(event, menu.title)}>
                                    {menu.title}
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl) && selectedMenu === menu.title}
                                    onClose={handleClose}
                                >

                                    {menu.options.map((option) => (
                                        <NavLink key={option} to={`/category/${option.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <MenuItem onClick={handleClose}>{option}</MenuItem>
                                        </NavLink>
                                    ))}

                                </Menu>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <CartWidget />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;