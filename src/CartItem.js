import React from "react";

class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item" >
                <div className="left-block" style={styles.image}>
                </div>
                <div className="right-block">
                    <div className="right-block-info">
                        <div style={{fontWeight:'bold'}}>Phone</div>
                        <div>Rs 9999</div>
                        <div>Qty 1</div>
                    </div>
                    <div className="cart-item-actions">
                        <img src="https://img.icons8.com/small/32/null/filled-plus-2-math.png" alt="free"/>
                        <img src="https://img.icons8.com/small/32/null/filled-minus-2-math.png" alt="free"/>
                        <img src="https://img.icons8.com/small/32/null/filled-trash.png" alt="free"/>
                    </div>
                </div>
            </div>
        );
    }
}
const styles={
    image:{
        
    }
};
export default CartItem;