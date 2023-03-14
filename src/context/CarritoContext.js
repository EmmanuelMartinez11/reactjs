//Hooks
import { useContext, createContext, useState } from "react";
//Libreria
import Swal from 'sweetalert2'


const CarritoContext = createContext()

export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = (props) => {
    const [carrito, setCarrito] = useState([])

    //Si exsiste producto en el carrito
    const isIncart = (id) => {
        return carrito.find(producto => producto.id === id)
    }
    
    //Eliminar producto del carrito
    const removeItem = (id) => {
        setCarrito(carrito.filter(producto => producto.id !== id))
    }

    //Vaciar carrito. Como solo quiero que se aplique el sweet alert al vaciar carrito pongo una condicional
    const emptyCart = (lugar) => {
        if(lugar === "carrito") {
            Swal.fire({
                title: 'Está seguro de vaciar el carrito?',
                text: "Deberá seleccionar todos los productos nuevamente",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, seguro',
                confirmButtonColor: "#3085d6",
                cancelButtonText: 'No, no quiero',
                cancelButtoncolor: "#d33"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Sin productos!',
                        icon: 'success',
                        text: 'Se ha vaciado el carrito',
                    })
                    setCarrito([])
                }
            }) 
        } else {
            setCarrito([])
        }
    }
    
    //Cantidad total de productos en el carrito
    const getItemQuantity = () => {
        return carrito.length
    }

    //Precio total de la compra
    const totalPrice = () => {
        return carrito.reduce((acumulador, producto) => acumulador += (producto.cant * producto.precio), 0)
    }
    
    //Agregar producto al carrito
    const addItem = (producto, cantidad) => {
        if (isIncart(producto.id)) {
            const indice = carrito.findIndex(prod => prod.id === producto.id)
            const carritoDesparramado = [...carrito]
            carritoDesparramado[indice].cant = cantidad
            setCarrito(carritoDesparramado)
        }
        else {
            const prodCart = {
                ...producto,
                cant: cantidad
            }
            setCarrito([...carrito, prodCart])
        }
    }

    
    console.log(carrito)
    
    return (
        <CarritoContext.Provider value={{carrito, removeItem, emptyCart, getItemQuantity, totalPrice, addItem}}>
            {props.children}
        </CarritoContext.Provider>
    )
}