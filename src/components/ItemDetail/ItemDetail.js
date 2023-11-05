import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function ItemDetail ({id, name, image, category, description, price, stock}) {
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        
        const item = {
            id, name, price
        }
    
        // addItem(item, quantity)
    }
    
 
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={image} alt={name} className="ItemImg"/>
            </picture>
            <section className="seccion-info">
                
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descricion: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
            }
            </footer>
        </article>
    )

}

export default ItemDetail;