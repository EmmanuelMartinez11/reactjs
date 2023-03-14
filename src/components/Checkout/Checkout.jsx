//Estilos
import "./Checkout.css"
//Hooks 
import { useRef } from "react"
//React-router-dom
import { useNavigate, Link } from "react-router-dom"
//Contexto
import { useCarritoContext } from "../../context/CarritoContext"
//Firebase
import {createOrdenDeCompra, getProducto, updateProducto} from "../../utils/firebase"
//Libreria
import Swal from 'sweetalert2'

const Checkout = () => {
    const {carrito, emptyCart, totalPrice} = useCarritoContext() //Extraigo esto de carrito context y los uso dentro de este componente

    const datosFormulario = useRef() //Uso este hook para tomar el formulario
    
    const navigate = useNavigate() //Uso esta funcion para volver al incio

    const consultarFormulario = (e) => {
        e.preventDefault() //propiedad que detiene el comportamiento que tiene por defecto el formulario
        
        const data = new FormData(datosFormulario.current) //Tomo la referencia del formulario y la convierto en objeto iterable
        const cliente = Object.fromEntries(data) //Tomo el objeto iterable y lo paso a objeto simple
        
        if (cliente.email === cliente.email2) {
            const carritoPorComprar  = [...carrito] //Funcion que resta el stock de la base de datos, al confirmar una compra
            carritoPorComprar.forEach (productoCarrito => {
                getProducto(productoCarrito.id).then (productoBaseDeDatos => {
                    productoBaseDeDatos.stock -= productoCarrito.cant //porque asi defini cantidad en addItem
                    updateProducto(productoBaseDeDatos.id, productoBaseDeDatos)
                })
            })
    
            createOrdenDeCompra(cliente, carritoPorComprar, totalPrice(), new Date().toISOString()).then( ordenDeCompra => //invoco a createOrdenDeCompra, le paso los parametros y cuando la promesa se cumpla, envio el sweetAlert
                Swal.fire({
                    icon: 'success',
                    title: 'Su compra fue realizada',
                    text: `Su orden de compra con el id ${ordenDeCompra.id} por un total de $${new Intl.NumberFormat('de-DE').format(totalPrice())} fue realizada con exito`,
                  })
            )
            e.target.reset()// reset de formulario
            emptyCart() //vaciar carrito
            navigate("/") //volver al inicio
        }else {
            e.preventDefault()
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: "Los correos electronicos ingresados no coinciden",
              })
        }
        
        
    }
    

    return (
        <>
            {carrito.length === 0 
            ?
            <div className="noProductos">
                <h2>Para poder realizar la orden de compra debe tener productos en el carrito <i className="bi bi-emoji-frown"></i></h2>
                <Link to={"/"}><button className="prodDetBoton volver"><i className="bi bi-arrow-return-left"></i> Volver a la tienda</button></Link>
            </div>
                
            :
                <div className="contenedor">
                    <h2 className="formularioTitulo">Finalizar compra</h2>
                    <div className="formularioContainer">
                        
                        <form className="formulario" onSubmit={consultarFormulario} ref={datosFormulario}>
                            <div>
                                <label htmlFor="nombre">Nombre y apellido</label>
                                <input type="text" name="nombre" id="" required/>
                            </div>
                            <div>
                                <label htmlFor="dni">Ingrese su DNI</label>
                                <input type="number" name="dni" id="" required/>
                            </div>
                            <div>
                                <label htmlFor="email">Ingrese su correo electronico</label>
                                <input type="email" name="email" id="" required/>
                            </div>
                            <div>
                                <label htmlFor="email2">Repita su correo electronico</label>
                                <input type="email" name="email2" id="" required/>
                            </div>
                            <div>
                                <label htmlFor="telefono">Ingrese su numero de telefono o celular</label>
                                <input type="number" name="telefono" id="" required/>
                            </div>
                            <div>
                                <label htmlFor="direccion">Ingrese su direccion</label>
                                <input type="text" name="direccion" id="" required/>
                            </div>
                            <button type="submit">Finalizar compra</button>
                        </form>
                        <div className="contacto">
                            <h3 className="info">Informacion de contacto</h3>
                            <ul>
                                <li><i className="bi bi-geo-alt-fill"></i> Mi casa</li>
                                <li><i className="bi bi-telephone-fill"></i> 111 111 111 111</li>
                                <li><i className="bi bi-envelope-at"></i> tech-mania@gmail.com</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident ipsam necessitatibus repellendus?</p>
                            <p>tech-mania.com</p>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Checkout;
