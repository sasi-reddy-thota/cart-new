import React from "react";

const CartItem=(props)=>{
    const { title,price,qty }=props.product;
    return(
        <div className="cart-item" >
            <div className="left-block" >
            </div>
            <div className="right-block">
                <div className="right-block-info">
                    <div style={{fontWeight:'bold'}}>{title}</div>
                    <div>Rs {price}</div>
                    <div>Qty {qty} </div>
                </div>
                <div className="cart-item-actions">
                    <img 
                        src="https://img.icons8.com/small/32/null/filled-plus-2-math.png" 
                        alt="free"
                        onClick={() => props.onIncreaseQuantity(props.product)}
                    />
                    <img 
                        src="https://img.icons8.com/small/32/null/filled-minus-2-math.png" 
                        alt="free"
                        onClick={() => props.ondecreaseQuantity(props.product)}
                    />
                    <img 
                        src="https://img.icons8.com/small/32/null/filled-trash.png" 
                        alt="free"
                        onClick={() => props.ondeleteProduct(props.product.id)}
                    />
                </div>
            </div>
        </div>
    );
}

export default CartItem;