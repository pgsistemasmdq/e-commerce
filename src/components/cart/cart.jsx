import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./cart.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/client';

export const Cart = () => {
  const { cart, updateQuantity, removeItem, clear, buyerInfo, saveBuyerInfo } = useCart();
  const [buyer, setBuyer] = useState(buyerInfo || { name: "", phone: "", email: "" });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    // Habilita el botón solo si todos los campos tienen algo
    setIsButtonDisabled(!(buyer.name.trim() && buyer.phone.trim() && buyer.email.trim()));
  }, [buyer]);

  const totalUnidades = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalDinero = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    // Validación manual
    if (!buyer.name.trim()) {
      toast.warning("⚠️ Ingresá tu nombre.", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      document.querySelector('input[name="name"]').focus();
      return;
    }
    if (!buyer.phone.trim()) {
      toast.warning("⚠️ Ingresá tu teléfono.", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      document.querySelector('input[name="phone"]').focus();
      return;
    }
    if (!buyer.email.trim()) {
      toast.warning("⚠️ Ingresá tu email.",{
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      document.querySelector('input[name="email"]').focus();
      return;
    }

    saveBuyerInfo(buyer);
  
    const compra = {
      buyer: { ...buyer },
      items: cart.map(item => ({
        id: item.id,
        title: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      total: totalDinero
    };
  
    try {
      const orderCollection = collection(db, "orders");
      const docRef = await addDoc(orderCollection, compra);
      console.log("ID de la orden:", docRef.id);
  
      toast.success(`✅ Compra confirmada. Nro de Orden: ${docRef.id}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
  
      clear(); // Vaciar carrito después de la compra
    } catch (error) {
      toast.error("❌ Hubo un error al procesar la compra. Inténtalo nuevamente.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };
  
  return (
    <div className="container">
      <h2 className="cart-title">🛒 Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p className="empty-message">Tu carrito está vacío 😔</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} className="cart-image" />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button onClick={() => updateQuantity(item.id, 1)} className="cart-btn">➕</button>
                    <button onClick={() => updateQuantity(item.id, -1)} className="cart-btn">➖</button>
                    <button onClick={() => removeItem(item.id)} className="cart-btn remove">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <p className="summary-item">🛍️ Total de Unidades: <span>{totalUnidades}</span></p>
            <p className="summary-item">💰 Total a Pagar: <span>${totalDinero.toFixed(2)}</span></p>
          </div>

          {/* Formulario de datos SIEMPRE visible */}
          <form className="checkout-form">
            <h3>📋 Completa tus datos antes de finalizar tu compra</h3>
            <label>
              Nombre:
              <input type="text" name="name" value={buyer.name} onChange={handleChange} required /> 
    
            </label>
            <label>
              Teléfono:
              <input type="text" name="phone" value={buyer.phone} onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={buyer.email} onChange={handleChange} required />
            </label>
          </form>

          <div className="cart-actions">
            <button onClick={clear} className="clear-cart">🗑️ Vaciar carrito</button>
            <button onClick={handleCheckout} className="checkout-btn">
              🛒 Finalizar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};
