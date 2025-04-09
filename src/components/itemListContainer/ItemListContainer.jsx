import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/ItemList";
import Loader from "../Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { getDocs, collection, query, where, orderBy } from "firebase/firestore"; 
import { db } from '../../firebase/client';
import "./ItemListContainer.css";
const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
     const productsRef = category
      ? query(collection(db, "products"), where("categoryId", "==", category))
      : query(collection(db, "products"), orderBy("categoryId"));

    getDocs(productsRef)
      .then((data) => {
        const dataFiltrada = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        setProductos(dataFiltrada);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]); 

  if (loading) return <Loader loading={loading} />;

  return <ItemList productos={productos} />;
};

export default ItemListContainer;