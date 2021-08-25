import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="row-span-6 col-span-1 bg-customGrey">
            <h1 className="bg-customDarkGrey m-5 text-5xl text-center py-2">Hotel</h1>
            <div className="flex flex-col mt-10 text-3xl h-2/4">
                <Link className="hover:bg-customDarkGrey pl-6 py-3" to="/">Inici</Link>
                <Link className="hover:bg-customDarkGrey pl-6 py-3" to="/newIssue">Nova incidencia</Link>
                <Link className="hover:bg-customDarkGrey pl-6 py-3" to="/">Stock</Link>
                <Link className="hover:bg-customDarkGrey pl-6 py-3" to="/">Historic</Link>
                <Link className="hover:bg-customDarkGrey pl-6 py-3" to="/">Gestionar Usuaris</Link>
                <Link className="hover:bg-customDarkGrey pl-6 py-3" to="/">Maquinaria</Link>
                <Link className="hover:bg-customDarkGrey pl-6 py-3" to="/">Configuració</Link>
                {/* <Link to="/issues">Issues</Link> */}
            </div>
        </nav>
     );
}
 
export default Navbar;