
import Item from "../item/item.jsx";
import "./itemList.css";

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
