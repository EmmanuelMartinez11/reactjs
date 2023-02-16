import Item from "../Item/Item";

const ItemList = ({arrayObjetos}) => {
    return (
        <>
            {arrayObjetos.map(producto => <Item item={producto} key={producto.id}/>)}
        </>
    );
}

export default ItemList;
