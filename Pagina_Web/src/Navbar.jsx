import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Hotel</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/issues">Issues</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;