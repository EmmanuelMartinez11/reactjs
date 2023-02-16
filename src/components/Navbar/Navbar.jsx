import "./Navbar.css"
import { Link } from "react-router-dom";
import Categorias from "./Categorias/Categorias"
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav className="nav">
            <Link to={"/"}><h1 className="Titulo">Tech-mania</h1></Link>
            <Categorias/>
            <input type="text" placeholder="Buscar producto"/>
            <CartWidget cantidadCarrito={0}/>
        </nav>
    );
}

export default Navbar;
