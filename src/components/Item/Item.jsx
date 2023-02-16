import "./Item.css"
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
            <button className="botonComprar">Comprar</button>
        </div>
    );
}

export default Item;
