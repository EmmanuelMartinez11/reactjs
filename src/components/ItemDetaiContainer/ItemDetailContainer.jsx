import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { consultarBaseDeDatos } from "../../utils/Funciones";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const {id} = useParams()
    const [producto, setProducto] = useState([])
    useEffect(() => {
        consultarBaseDeDatos("../json/productos.json").then(arrayObjetos => {
            const productoDetalle = arrayObjetos.find(item => item.id === Number(id) )
            setProducto(productoDetalle)
        })
    }, [id])
    
    return (
        <div className="produtoDetallado">
            <ItemDetail productoDetallado={producto}/>
        </div>
    );
}

export default ItemDetailContainer;
