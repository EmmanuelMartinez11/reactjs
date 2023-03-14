//Componentes
import ItemDetail from '../ItemDetail/ItemDetail';
//Hooks 
import {useState, useEffect} from 'react';
//React-router-dom
import { useParams } from "react-router-dom";
//Firebase
import { getProducto } from "../../utils/firebase";


const ItemDetailContainer = () => {
    const {id} = useParams() // Guarda el id del producto en el que estoy parado

    const [producto, setProducto] = useState([])

    useEffect(() => { //Toma un objeto dependiendo de su id y me lo pasa como prop a ItemDetail
        getProducto(id).then(productoDetallado => {
            setProducto(productoDetallado)
        })
    }, [id]) //Se renderiza de nuevo cada vez que se cambia el id

    return (
        <div>
            <ItemDetail objetoDetallado={producto}/>
        </div>
    );
}

export default ItemDetailContainer;
