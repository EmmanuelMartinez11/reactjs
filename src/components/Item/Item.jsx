//Estilos
import "./Item.css"
//React-router-dom
import { Link } from "react-router-dom";

//Componente plantilla que toma un objeto y pone sus propiedades en un JSX
const Item = ({item}) => {
    return (
        <div className="productoCard">
            <img src={item.img} alt=""/>
            <div className="datosProducto">
                <h3 className="linea">{item.nombre} {item.marca}</h3>
                <p className="linea texto">Modelo: "{item.modelo}"</p>
                <p className="linea">Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
            </div>
            <Link className="comprar" to={`/item/${item.id}`}><button className="botonComprar">Ver producto</button></Link>
        </div>
    );
}


export default Item;
