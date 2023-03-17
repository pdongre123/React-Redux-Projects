import React from 'react'
import Cart from "../images/cart.png";
function Header(props)
{
    console.warn(props.data)
    return(
        <div>
             <div className="add-to-cart">
    <span className="cart-count">{props.data.length}</span>
                <img src={Cart} alt="" />
            </div>
        </div>
    )
}

export default Header