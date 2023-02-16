import { useState, useEffect } from "react";
import { consultarBaseDeDatos } from "../../utils/Funciones";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    useEffect(() => {
        consultarBaseDeDatos("../json/productos.json").then(arrayObjetos => {
            const productoDetalle = arrayObjetos.find(item => item.id === 3 )
            setProducto(productoDetalle)
        })
    }, [])
    
    return (
        <div className="produtoDetallado">
            <ItemDetail productoDetallado={producto}/>
        </div>
    );
}

export default ItemDetailContainer;
