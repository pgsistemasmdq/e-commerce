/* 
import Item from "../item/item.jsx";
import "./ItemList.css"; // Agrega un archivo CSS

const ItemList = ({ productos }) => {
  return (
    <div className="item-list">
      {productos?.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList; */

/* 
import { useParams } from "react-router-dom";
import Item from "../item/item.jsx";
import "./ItemList.css";

const ItemList = ({ productos }) => {
  const { category } = useParams(); // Obtener la categoría de la URL

  // Normalizar la categoría a minúsculas (por si la URL tiene mayúsculas)
  const categoryNormalized = category?.toLowerCase();

  // Filtrar productos: Si no hay categoría, mostrar todo
  const productosFiltrados = categoryNormalized
    ? productos.filter((producto) => producto.category.toLowerCase() === categoryNormalized)
    : productos;

  return (
    <div className="item-list">
      {productosFiltrados.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;


 */

// ItemList.jsx

import Item from "../item/item.jsx";
import "./ItemList.css";

const ItemList = ({ productos, category }) => {
  const categoryNormalized = category?.toLowerCase();

  // Filtrar por categoría si existe, si no, mostrar todo
  const productosFiltrados = categoryNormalized
    ? productos.filter((producto) => producto.category.toLowerCase() === categoryNormalized)
    : productos;

  return (
    <div className="item-list">
      {productosFiltrados.map((producto) => (
        <Item key={producto.id} producto={producto} mostrarBoton={true} />
      ))}
    </div>
  );
};

export default ItemList;
