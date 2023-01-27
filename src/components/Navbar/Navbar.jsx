import "./Navbar.css"

import Categorias from "./Categorias/Categorias"
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav className="nav">
            <h1>Tech-mania</h1>
            <Categorias/>
            <input type="text" placeholder="Buscar producto"/>
            <CartWidget cantidadCarrito={0}/>
        </nav>
    );
}

export default Navbar;
