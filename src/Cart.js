import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products:[
                {
                    title:'Phone',
                    price:9999,
                    qty:19,
                    url:'',
                    id:1
                },
                {
                    title:'Laptop',
                    price:999,
                    qty:54,
                    url:'',
                    id:2
                },
                {
                    title:'Head Phones',
                    price:99,
                    qty:13,
                    url:'',
                    id:3
                }
            ]
        }
}
    render(){
        const {products}=this.state
        return(
            <div className="cart">
                {
                    products.map((product)=>{
                        return <CartItem product={product} key={product.id}/>
                    })
                }
            </div>
        );
    }
}

export default Cart;