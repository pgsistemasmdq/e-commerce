import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from '../cartWidget/CartWidget.jsx'

const menuItems = [
    { title: 'Despensa', options: ['Salsas', 'Condimentos'] },
    { title: 'Frescos', options: ['Quesos', 'Embutidos', 'Verduras'] },
    { title: 'Delikatessen', options: ['Chocolates', 'Conservas'] }
];

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedMenu, setSelectedMenu] = React.useState(null);

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
                        <img src="../../../img/isologoNew60px.png" alt="Logo" style={{ height: 40, marginRight: 2 }} />
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
                                        <MenuItem key={option} onClick={handleClose}>{option}</MenuItem>
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
export default Navbar