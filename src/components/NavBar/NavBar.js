import CarWidget from "../CarWidget/CarWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Pizzería Rocko</h3>
            <div className='row'>
                <button className='col s4 navbar-categria btn waves-effect waves-ligth'>Pizzas</button>
                <button className='col s4 navbar-categria btn waves-effect waves-ligth'>Lomos</button>
                <button className='col s4 navbar-categria btn waves-effect waves-ligth'>Empanadas</button>
            </div>
            <CarWidget/>
        </nav>

    )
}

export default NavBar