//Componentes
import ItemCount from "../ItemCount/ItemCount";
//Estilos
import "./ItemCart.css"
//React-router-dom
import { Link } from "react-router-dom";
//Contexto
import { useCarritoContext } from "../../context/CarritoContext";
//Libreria
import { toast } from "react-toastify";
const ItemCart = ({item}) => {
    const {removeItem, addItem} = useCarritoContext()
    
    const onAdd = (cantidad) => { //Dentro de la función onAdd, agregé un mensaje de toasty para que cada vez que se invoque a la funcion, deje un mensaje
        addItem(item, cantidad)
        toast.success(`Se actualizó la cantidad de ${item.nombre} ${item.modelo} en el carrito` , {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            }); 
    }   

    const eliminar = () => { //Funcion que hace que se eliminie un producto del carrito
        removeItem(item.id)
        toast.warn(`Se eliminó ${item.nombre} ${item.modelo} del carrito`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    //Componente plantilla que toma un objeto y pone sus propiedades en un JSX
    return (
        <div className="carritoProducto">

            <Link to={`/item/${item.id}`}><img className="carritoImagen" src={item.img} alt="..."/></Link> 

            <div className="carritoDatos">
                <h5>{item.nombre} {item.modelo}</h5>
                <p> Cantidad: {item.cant}</p>
                <p> Precio Unitario: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <p> Subtotal: ${new Intl.NumberFormat('de-DE').format(item.cant * item.precio)}</p>
            </div>

            <div className="carritoBotones">
                <ItemCount valorMinimo={1} valorMaximo={item.stock} onAdd={onAdd} mensajeToasty={"Hola"} textBoton={"Actualizar la cantidad a comprar"} icono={<i className="bi bi-arrow-clockwise"></i>}></ItemCount>
                <button className="eliminarProducto" onClick={() => eliminar()}><i className="bi bi-trash"></i> Eliminar del carrito</button>
            </div>  
            
        </div>
    );
}

export default ItemCart;
