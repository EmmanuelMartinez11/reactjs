import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        <ul>
            <li>
                <Link to={"/"}><button className="botonInicio">Inicio</button></Link>
            </li>
            <li>Categorias
                <ul>
                    <li><Link to={`/categoria/Notebooks`}><button>Noteboks</button></Link></li>
                    <li><Link to={"/categoria/Celulares"}><button>Celulares</button></Link></li>
                    <li><Link to={"/categoria/Televisión"}><button>Televisión</button></Link></li>
                    <li><Link to={"/categoria/Periféricos y otros"}><button>Periféricos y otros </button></Link></li>
                </ul>
            </li>
        </ul>
    );
}

export default Categorias;
