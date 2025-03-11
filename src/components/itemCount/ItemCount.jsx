import "./ItemCount.css";

import useCounter from "../../customHooks/useCount.jsx";

const ItemCount = ({ maxStock, onAddToCart }) => {
  const { contador, aumentar, decrementar } = useCounter(1, maxStock);

  const handleAddToCart = () => {
    onAddToCart(contador); // Notifica al padre la cantidad seleccionada
  };

  return (
    <div className="item-detail-actions">
      <button onClick={decrementar}>-</button>
      <input type="number" value={contador} readOnly />
      <button onClick={aumentar}>+</button>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;