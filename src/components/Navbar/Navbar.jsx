//Estilos
import "./Navbar.css"
//Componentes
import Categorias from "./Categorias/Categorias"
import CartWidget from "../CartWidget/CartWidget";
//React-router-dom
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
           <Link className="Titulo" to={"/"}><h1>Tech-mania</h1></Link> 
            <Categorias/>
            <CartWidget cantidadCarrito={0}/>
        </nav>
    );
}

export default Navbar;
