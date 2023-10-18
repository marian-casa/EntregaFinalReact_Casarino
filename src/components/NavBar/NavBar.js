import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

function NavBar (){

    return (

        <nav className="nav" role="navigation" aria-label="main navigation">
            <div className="navbar">
            <div className="navbar-nombre">
            <Link to="/">
                <h3 className="nombre-pagina">Pizzería Rocko</h3>
            </Link>
            </div>
            <div className="navbar-menu">
                <div className="columns">
                    <div className="column navbar-categria btn waves-effect waves-ligth">
                        <NavLink to={`/category/pizzas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pizzas</NavLink>
                    </div>
                    <div className="column navbar-categria btn waves-effect waves-ligth">
                        <NavLink to={`/category/lomos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Lomos</NavLink>
                    </div>
                    <div className="column navbar-categria btn waves-effect waves-ligth">
                        <NavLink to={`/category/empanadas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Empanadas</NavLink>
                    </div>
                </div>
                
                
                
                
            </div>
            <div className="navbar-carrito">
                <CartWidget/>
            </div>
            </div>
            
            
        </nav>

    )
}

export default NavBar;