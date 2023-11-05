import { useContext } from "react";
import cart from "./assets/cart.svg";
import './CartWidget.css'
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget (){
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className="carrito CartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className="img-carrito" src={cart} alt="cart-widget"/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget;