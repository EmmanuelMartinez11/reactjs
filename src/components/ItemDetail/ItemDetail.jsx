//Estilos
import "./ItemDetail.css"
//Componentes
import ItemCount from "../ItemCount/ItemCount";
//React-router-dom
import { Link } from "react-router-dom";
//Contexto
import { useCarritoContext } from "../../context/CarritoContext";
//Libreria
import { toast } from "react-toastify";

const ItemDetail = ({objetoDetallado}) => {
    const{addItem} = useCarritoContext()
    
    const onAdd = (cantidad) => {//Dentro de la función onAdd, agregé un mensaje de toasty para que cada vez que se invoque a la funcion, deje un mensaje
        if (objetoDetallado.stock === 0) {
            toast.error(`No hay stock de ${objetoDetallado.nombre} ${objetoDetallado.modelo}` , {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                }); 
        } else {
            addItem(objetoDetallado, cantidad)
            toast.success(`Se agregó ${objetoDetallado.nombre} ${objetoDetallado.modelo} al carrito` , {
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
        
    }    

    //Componente plantilla que toma un objeto y pone sus propiedades en un JSX
    return (
        <div className="prodDetContainer">

            <div className="prodDetImagenContainer">
                <img src={objetoDetallado.img} className="prodDetImagen" alt="..."/>
            </div>

            <div className="prodDetDetallesContainer">
                <h3 className="prodDetTitulo">{objetoDetallado.nombre}</h3>
                <p className="prodDetTexto">Modelo: {objetoDetallado.modelo}</p>
                <p className="prodDetTexto">Marca: {objetoDetallado.marca}</p>
                <p className="prodDetTexto moverComponente">Precio: ${new Intl.NumberFormat('de-DE').format(objetoDetallado.precio)}</p>
                <ItemCount valorMinimo={1} valorMaximo={objetoDetallado.stock} onAdd={onAdd} icono={<i className="bi bi-bag"></i>} textBoton={" Agregar al carrito"}/>
                <p className="prodDetTexto">Stock: {objetoDetallado.stock}</p>
                <div className="moverComponente">
                    <p className="prodDetDetalle prodDetTexto">Descripción:</p>
                    <p>{objetoDetallado.descrip}</p>
                </div>

                <div>
                    <Link to={`/category/${objetoDetallado.idCategoria}`}><button className="prodDetBoton volver"><i className="bi bi-arrow-return-left"></i> Ver más {objetoDetallado.idCategoria}</button></Link>
                    <Link to={"/"}><button className="prodDetBoton volver"><i className="bi bi-arrow-return-left"></i> Volver al inicio</button></Link>
                    <Link to={"/cart"}><button className="prodDetBoton seguir"><i className="bi bi-cart-check"></i> Ver carrito</button></Link>
                </div>
            </div>
            
    </div>
    );
}

export default ItemDetail;
