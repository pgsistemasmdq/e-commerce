
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Badge from '@mui/material/Badge';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const CartWidget = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  // Calcular el total de productos en el carrito
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const goToCart = () => navigate('/cart');

  return (
    <Badge badgeContent={totalItems} color="primary" onClick={goToCart} style={{ cursor: 'pointer' }}>
      <ShoppingCartTwoToneIcon color="action" />
    </Badge>
  );
};

export default CartWidget;