import "./ItemDetail.css";
import Item from "../item/item.jsx";
import useCounter from "../../customHooks/useCount.jsx";
import ItemCount from "../itemCount/ItemCount.jsx";
import { useState } from "react";


// ✅ Importar toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// HOC: Higher Order Component
const hocItemDetail = (ComponenteOriginal) => {
  return ({ producto, actualizarCarrito, mostrarBoton }) => {
    const maxStock = producto.stock < 10 ? producto.stock : 10; // Máximo 10 o el stock real
    const { contador, aumentar, decrementar } = useCounter(1, maxStock);

    const [mensaje, setMensaje] = useState("");

    const handleAddToCart = () => {
      actualizarCarrito(contador);

      // Toast personalizado
      toast(`${producto.title} se agregó al carrito 🛒`, {
        position: "bottom-right",       // Abajo a la derecha
        autoClose: 2000,                // Se cierra en 2 segundos
        hideProgressBar: false,         // Muestra la barra de progreso
        closeOnClick: true,             // Cierra al hacer clic
        pauseOnHover: true,             // Pausa al pasar el mouse
        draggable: true,                // Es arrastrable
        theme: "dark",                  // Tema oscuro
        style: {
          backgroundColor: "#4CAF50",   // 🎨 Fondo verde (personalizado)
          color: "#fff",                // Color de texto blanco
          fontSize: "0.8rem",           // 🔍 Texto más pequeño
          borderRadius: "10px",         // Bordes redondeados
        },
      });


    };

    const precioFormateado = producto.price.toFixed(2);

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

        {/* AtemCount con el custom hook */}
        <ItemCount
          maxStock={producto.stock < 10 ? producto.stock : 10}
          onAddToCart={handleAddToCart}
        />


      </div>
    );
  };
};

// Crear el componente detallado con el HOC
const ItemDetail = hocItemDetail(Item);
export default ItemDetail;
