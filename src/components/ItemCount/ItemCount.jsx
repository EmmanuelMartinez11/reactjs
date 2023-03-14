//Estilos
import "./ItemCount.css"
//Hooks 
import {useState} from 'react';
const ItemCount = ({valorMinimo, valorMaximo, onAdd, textBoton, icono}) => {
    const [contador, setContador] = useState (1)

    //Funciones que cambian el estado de contador mediante setContador
    const restar = () => contador > valorMinimo && setContador(contador-1) 
    const sumar = () => contador < valorMaximo  && setContador(contador+1) 

    //Componente contador
    return (
        <div>
            <button className="botonContador resta" onClick={() => {restar()}}>-</button>
            <span className="contador">{contador}</span>
            <button className="botonContador suma" onClick={() => {sumar()}}>+</button>
            <button className="botonContador actualizar" onClick={() => onAdd(contador)}>{icono}{textBoton}</button>
        </div>
    );
}


export default ItemCount;