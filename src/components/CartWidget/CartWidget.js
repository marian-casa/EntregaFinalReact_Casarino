import cart from "./assets/cart.svg";
import './CartWidget.css'

function CartWidget (){

    return (
        <div className="carrito">
            <img className="img-carrito" src={cart} alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget;