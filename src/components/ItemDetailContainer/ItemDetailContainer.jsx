import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ItemDetailContainer = () => {
  const { id } = useParams(); // Captura el id de la URL
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Llama a la API para obtener el producto por ID
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProducto(data))
        .catch((error) => {
          console.error("Error al cargar el producto:", error);
          toast.error("Producto no encontrado 😢", {
            position: "bottom-right",
          });
        })
        .finally(() => setLoading(false));
    }
  }, [id]);
  if (loading) return  <Loader />;
  if (!producto) return null;

  return <ItemDetail producto={producto} actualizarCarrito={() => { }} mostrarBoton={false} />;
};

export default ItemDetailContainer;