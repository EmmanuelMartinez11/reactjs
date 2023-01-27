const CartWidget = ({cantidadCarrito}) => {
    return (
        <>
            <button className="botonCarrito"><i class="bi bi-cart"></i><span>{cantidadCarrito}</span></button>
            
        </>
            

    );
}

export default CartWidget;
