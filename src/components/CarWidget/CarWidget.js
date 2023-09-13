import cart from './assets/pngwing.com.png'

const CarWidget = () => {
    return (
        <div className='contenedor-carrito'>
            <img src={cart} alt='cart-widget' />
            0
        </div>
    )
};

export default CarWidget