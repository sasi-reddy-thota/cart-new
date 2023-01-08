import React from "react";

class CartItem extends React.Component{
     
    increaseQuantity=()=>{
        // console.log(this.state);
        this.setState(
            {
                qty:this.state.qty+1
            }
        );
    }
    decreaseQuantity=()=>{
        // console.log(this.state);
        if(this.state.qty>0){
            this.setState(
                {
                    qty:this.state.qty-1
                }
            );
        }
    }
    render(){
        const { title,price,qty }=this.props.product;
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
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            src="https://img.icons8.com/small/32/null/filled-minus-2-math.png" 
                            alt="free"
                            onClick={this.decreaseQuantity}
                        />
                        <img src="https://img.icons8.com/small/32/null/filled-trash.png" alt="free"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;