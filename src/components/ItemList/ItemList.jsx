//Componentes
import Item from "../Item/Item";
import ItemCart from "../ItemCart/ItemCart";

//Componente que toma un array de objetos y me los modifica para que, cada uno, sea un JSX 
const ItemList = ({ArrayDeObjetos, plantilla}) => {
    return (
        <>
            {
                plantilla === "Item" 
                ? 
                ArrayDeObjetos.map(objeto => <Item item={objeto} key={objeto.id}/>)
                :
                ArrayDeObjetos.map(objeto => <ItemCart item={objeto} key={objeto.id}/>)
            }
            
        </>
    );
}

export default ItemList;

