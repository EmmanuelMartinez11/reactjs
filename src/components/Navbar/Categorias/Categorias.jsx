//React memo
import React from "react";
//React-router-dom
import { Link } from "react-router-dom";

//Componente que muestra las categorias y que, al hacerles click, me redirecciona
const Categorias = React.memo(() => {
    return (
        <ul>
            <li>
                <Link to={"/"}><button className="botonInicio">Inicio</button></Link>
            </li>
            <li className="botonInicio">Categorias
                <ul>
                    <li><Link to={"/category/televisores"}><button className="botonSubmenu">Televisores</button></Link></li>
                    <li><Link to={"/category/celulares"}><button className="botonSubmenu">Celulares</button></Link></li>
                    <li><Link to={"/category/relojes inteligentes"}><button className="botonSubmenu">Relojes inteligentes</button></Link></li>
                    <li><Link to={"/category/tablets"}><button className="botonSubmenu">Tablets</button></Link></li>
                </ul>
            </li>
        </ul>
    );
})

export default Categorias;





