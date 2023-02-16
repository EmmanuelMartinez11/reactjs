import "./Item.css"
import { Link } from "react-router-dom";
const Item = ({item}) => {
    return (
        <div className="productoCard">
            <img src={`/img/${item.img}`} alt="" />
            <div className="datosProducto">
                <h3 className="linea">{item.nombre} {item.marca}</h3>
                <p className="linea">Modelo: "{item.modelo}"</p>
                <p className="linea">stock: {item.stock}</p>
                <p className="linea">${item.precio}</p>
            </div>
            <Link to={`/item/${item.id}`} className="comprar"><button className="botonComprar">Ver producto</button></Link>
        </div>
    );
}

export default Item;
