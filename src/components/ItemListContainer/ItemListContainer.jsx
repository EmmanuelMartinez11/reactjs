import "./ItemListContainer.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { consultarBaseDeDatos } from "../../utils/Funciones";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {
    const{idCategoria} = useParams()
    console.log(idCategoria)
    const [productos, setProductos] = useState([])
    useEffect(() => {
        if (idCategoria) {
            consultarBaseDeDatos("../json/productos.json").then(productosFiltrados => {
                const arrayObjetos = productosFiltrados.filter(prods => prods.idCategoria === idCategoria)
                const items = ItemList({arrayObjetos})
                setProductos(items)
            })
        } else {
            consultarBaseDeDatos("./json/productos.json").then(arrayObjetos => {
                const items = ItemList({arrayObjetos})
                setProductos(items)
            })
        }
    }, [idCategoria])

    return (
        <div className="productoContainer">
            {productos}
        </div>
    );
}

export default ItemListContainer;
