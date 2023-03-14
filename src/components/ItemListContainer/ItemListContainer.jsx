//Estilos
import "./ItemListContainer.css"
//Componentes
import ItemList from '../ItemList/ItemList';
//Hooks 
import { useState, useEffect } from 'react';
//React-router-Dom
import { useParams } from "react-router-dom";
//Firebase
import { getProductos } from "../../utils/firebase";

//Componente que toma los datos de una API, los pasa a un array de objetos y ese array de objetos, me los pone como prop de ItemList (que los transforma en JSX)
const ItemListContainer = () => {
    const {idCategoria} = useParams()
    const[datosDeLaAPI, setdatosDeLaAPI] = useState([]) //Estado que cambia dependiendo de la categoria donde estoy parado (gracias a useParams)

    useEffect( () => {
        if (idCategoria) {
            getProductos().then((categoriaProductos) => { //Si estoy en parado en una categoria, me renderiza el componente de items con los productos de dicha categoria
                const ArrayDeObjetos = categoriaProductos.filter(prods => prods.idCategoria === idCategoria)
                const items = <div className="categoriaContainer">
                                <h2 className="categoriaTitulo">{idCategoria.toLocaleUpperCase()}</h2>
                                <div className="productoCategoriaContainer">
                                    <ItemList ArrayDeObjetos={ArrayDeObjetos} plantilla={"Item"}/>
                                </div>
                              </div>
                setdatosDeLaAPI(items)
            })
        } else {
            getProductos().then(ArrayDeObjetos => { //Me renderiza todos los productos
                const items = <div  className="productoContainer"> <ItemList ArrayDeObjetos={ArrayDeObjetos} plantilla={"Item"}/> </div>
                setdatosDeLaAPI(items)     
            })
        }
    }, [idCategoria]) //Cada vez que cambio de categoria se vuelve a renderizar

    return (
        <div>
            {datosDeLaAPI}
        </div>
    );
}

export default ItemListContainer;

