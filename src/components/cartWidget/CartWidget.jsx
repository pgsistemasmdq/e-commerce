import React from "react";
import Badge from '@mui/material/Badge';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const CartWidget = () => {
    return (
        <Badge badgeContent={1} color="primary">
          <ShoppingCartTwoToneIcon color="action" />
        </Badge>
      );
}
export default CartWidget