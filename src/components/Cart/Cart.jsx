//Componentes
import ItemList from "../ItemList/ItemList"
//Estilos
import "./Cart.css"
//React-router-dom
import { Link } from "react-router-dom"
//Contexto
import { useCarritoContext } from "../../context/CarritoContext";

const Cart = () => {
    const {carrito, emptyCart, totalPrice} = useCarritoContext() //Extraigo esto de carrito context y los uso dentro de este componente
    
    return(
        <>
            {carrito.length === 0 

            ?
                <div className="noProductos">
                    <h2>No hay productos en el carrito <i className="bi bi-emoji-frown"></i></h2>
                    <Link to={"/"}><button className="prodDetBoton volver"><i className="bi bi-arrow-return-left"></i> Volver a la tienda</button></Link>
                </div>

            :
            <div>
                <ItemList ArrayDeObjetos={carrito} plantilla="ItemCart"/>
                <div className="carritoResumen">
                    <h3 className="carritoTitulo">Resumen de la compra: ${totalPrice()}</h3>
                    <div className="carritoRedireccion">
                        <Link to={"/"}><button className="carritoBoton volver"><i className="bi bi-arrow-return-left"></i> Continuar comprando</button></Link>
                        <button className="carritoBoton eliminarProducto" onClick={() => emptyCart("carrito")}><i className="bi bi-trash"></i> Vaciar carrito</button>
                        <Link to={"/checkout"}><button className="carritoBoton finalizar">Finalizar compra</button></Link>
                    </div>
                </div>
                
            </div>
            }
        </>
    )
}   

export default Cart;
