import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Hotel</h1>
            <div className="links">
                <Link to="/">Inici</Link>
                <Link to="/">Nova incidencia</Link>
                <Link to="/">Stock</Link>
                <Link to="/">Historic</Link>
                <Link to="/">Gestionar Usuaris</Link>
                <Link to="/">Maquinaria</Link>
                <Link to="/">Configuració</Link>
                {/* <Link to="/issues">Issues</Link> */}
            </div>
        </nav>
     );
}
 
export default Navbar;