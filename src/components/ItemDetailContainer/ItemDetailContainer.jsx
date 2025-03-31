import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doc, getDoc } from "firebase/firestore"; // Importamos funciones de Firestore
import { db } from "../../firebase/client"; // Importamos la instancia de Firestore
import './ItemDetailContainer.css';
const ItemDetailContainer = () => {
  const { id } = useParams(); // Captura el ID de la URL
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      const productRef = doc(db, "products", id); // Referencia al documento en Firestore

      getDoc(productRef)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            setProducto({ id: docSnapshot.id, ...docSnapshot.data() });
          } else {
            throw new Error("Producto no encontrado");
          }
        })
        .catch((error) => {
          console.error("Error al cargar el producto:", error);
          toast.error("Producto no encontrado 😢", { position: "bottom-right" });
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <Loader loading={loading} />;
  if (!producto) return null;

  return (
    <div className="item-detail-container">
      <ItemDetail producto={producto} actualizarCarrito={() => { }} mostrarBoton={false} />
    </div>
  );


};

export default ItemDetailContainer;