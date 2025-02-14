import "./ItemListContainer.css";

const ItemListContainer = ({ greeting, parrafo1, parrafo2 }) => {
    return (
        <div className="container">
            <h1>{greeting}</h1>
            <p>{parrafo1}</p>
            <p>{parrafo2}</p>
            
        </div>
    );
}

export default ItemListContainer;