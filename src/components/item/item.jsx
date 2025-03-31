
import "./Item.css";
import { useNavigate } from "react-router-dom";

const Item = ({ producto, mostrarBoton }) => {
  const navigate = useNavigate();

  // Función para navegar al detalle del producto
  const handleNavigate = () => {
    navigate(`/item/${producto.id}`);
  };

  return (
    <div className="card">
      <h2 className="card-title">{producto.title}</h2>

      {/* Categoría del producto */}
      <p className="card-category">{producto.categoryId}</p>

      {producto.image && (
        <img src={producto.image} alt={producto.title} className="card-image" />
      )}

      {/* Botón "Ver Detalle" */}
      {mostrarBoton && (
        <button onClick={handleNavigate} className="detail-button">
          Ver Detalle
        </button>
      )}

    </div>
  );
};

export default Item;