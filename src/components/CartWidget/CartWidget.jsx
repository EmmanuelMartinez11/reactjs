//Estilos
import "./CartWidget.css"
//React-router-dom
import { Link } from "react-router-dom";
//Firebase
import { useCarritoContext } from "../../context/CarritoContext";

const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext() //Extraigo esto de carrito context y los uso dentro de este componente
    
    return (
        <>
            <Link className="carrito" to={"/cart"}>
                <i className="bi bi-cart"></i>
                {getItemQuantity() > 0 && <span className="cantidadProducto">{getItemQuantity()}</span>}
            </Link>
        </>
    );
}

export default CartWidget;
