
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/ItemList";
import Loader from "../Loader/Loader";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {
        toast.error("Error al cargar los producto 😢", {
          position: "bottom-right",
        });
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return  <Loader />;

  return <ItemList productos={productos} category={category} />;
};

export default ItemListContainer;