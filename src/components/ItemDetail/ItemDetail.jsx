import "./ItemDetail.css";
import Item from "../item/item.jsx";
import ItemCount from "../itemCount/ItemCount.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🔹 Para redirigir a /cart

const hocItemDetail = (ComponenteOriginal) => {
  return ({ producto, mostrarBoton }) => {
    const { addItem } = useCart();
    const navigate = useNavigate(); // 🔹 Hook de navegación
    const [addedToCart, setAddedToCart] = useState(false); // 🔹 Estado para cambiar botones

    const handleAddToCart = (cantidad) => {
      addItem(
        {
          id: producto.id,
          name: producto.title,
          image: producto.image,
          price: producto.price,
          description: producto.description,
          stock: producto.stock,
        },
        cantidad
      );

      setAddedToCart(true); // 🔹 Cambia el estado al agregar

      toast(`${producto.title} x${cantidad} se agregó al carrito 🛒`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
          fontSize: "0.8rem",
          borderRadius: "10px",
        },
      });
    };

    const precioFormateado = producto.price ? producto.price.toFixed(2) : "0.00";

    return (
      <div className="item-detail">
        {/* Renderiza el componente base Item */}
        <ComponenteOriginal producto={producto} mostrarBoton={mostrarBoton} />

        <p className="card-description-container">{producto.description}</p>

        {/* Precio y stock */}
        <div className="card-footer">
          <p className="card-stock">Stock disponible: {producto.stock}</p>
          <p className="card-price">$ {precioFormateado}</p>
        </div>

        {/* 🔹 Condición para mostrar el botón adecuado */}
        {addedToCart ? (
          <button className="finish-button" onClick={() => navigate("/cart")}>
            Finalizar compra
          </button>
        ) : (
          <ItemCount maxStock={producto.stock < 10 ? producto.stock : 10} onAddToCart={handleAddToCart} />
        )}
      </div>
    );
  };
};

const ItemDetail = hocItemDetail(Item);
export default ItemDetail;