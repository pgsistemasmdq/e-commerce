import { createContext, useContext, useState } from 'react';

// Crear el contexto del carrito
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [buyerInfo, setBuyerInfo] = useState({ name: "", phone: "", email: "" });

  // Agregar un item al carrito
  const addItem = (item, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prevCart, { ...item, quantity }];
    });
  };

  // Remover un item del carrito por su id
  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Ajustar la cantidad de un item en el carrito
  const updateQuantity = (itemId, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  // Limpiar todo el carrito y los datos del comprador
  const clear = () => {
    setCart([]);
    setBuyerInfo({ name: "", phone: "", email: "" });
  };

  // Verificar si un item está en el carrito
  const isInCart = (id) => cart.some((item) => item.id === id);

  // Guardar información del comprador
  const saveBuyerInfo = (info) => {
    setBuyerInfo(info);
  };

  return (
    <CartContext.Provider value={{ 
      cart, addItem, removeItem, updateQuantity, clear, isInCart, 
      buyerInfo, saveBuyerInfo 
    }}>
      {children}
    </CartContext.Provider>
  );
};
