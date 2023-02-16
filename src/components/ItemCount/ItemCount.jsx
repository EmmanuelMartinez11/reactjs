import {useState} from 'react';

const ItemCount = ({valorMinimo, valorMaximo}) => {
    const [contador, setContador] = useState (1)

    const restar = () => contador > valorMinimo && setContador(contador-1)
    const sumar = () => contador < valorMaximo  && setContador(contador+1)

    return (
        <div>
            <button className='restar' onClick={() => {restar()}}>-</button>
            {contador}
            <button className='sumar' onClick={() => {sumar()}}>+</button>
        </div>
    );
}

export default ItemCount;