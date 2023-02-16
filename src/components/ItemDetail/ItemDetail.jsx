import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({productoDetallado}) => {
    return (
        <div className="productoDetallado">
            <div>
                <img src={`../img/${productoDetallado.img}`} alt="..." className="productoDetallado_Imagen" />
            </div>
            <div className="productoDetallado_Detalles">
                <h5 className="productoDetallado_Titulo">{productoDetallado.nombre}</h5>
                <p className="productoDetallado_Texto">Modelo: {productoDetallado.modelo}</p>
                <p className="productoDetallado_Texto">Marca: {productoDetallado.marca}</p>
                <p className="productoDetallado_Texto">Precio: ${productoDetallado.precio}</p>
                <p className="productoDetallado_Texto">Stock: {productoDetallado.stock}</p>
                <ItemCount valorMinimo={1} valorMaximo={productoDetallado.stock}/>
                <button className="productoDetallado_Boton">Finalizar Compra</button>
            </div>
    </div>
    );
}

export default ItemDetail;
