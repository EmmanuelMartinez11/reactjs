import "./Navbar.css"

import Categorias from "./Categorias/Categorias"
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav className="nav">
            <h1>Titulo Tienda</h1>
            <ul className="lista">
                <li>Categorias <Categorias/></li>
            </ul>
            <input type="text" />
            <CartWidget cantidadCarrito={0}/>
        </nav>
    );
}

export default Navbar;
