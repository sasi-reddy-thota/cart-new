import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
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
handleIncreaseQuantity=(product)=>{
    console.log('Hey please increase the quantity of ',product);
    const {products}=this.state;
    const index=products.indexOf(product);
    products[index].qty+=1;
    this.setState({
        products:products
    });
}
handledecreaseQuantity=(product)=>{
    console.log('Hey please increase the quantity of ',product);
    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty>0)
    {
        products[index].qty-=1;
        this.setState({
            products:products
        });
    }
        
}
handledeleteProduct=(productId) => {
    console.log('Hey please delete the product ',productId);
    const {products}=this.state;
    const items =products.filter((item)=>item.id!==productId);
    this.setState({
        products:items
    });
        
}
getCount=()=>{
  const{products}=this.state;
  let count=0;
  products.forEach((product)=>{
    count+=product.qty;
  })
  return count;
}
getTotal=()=>{
  const{products}=this.state;
  let total=0;
  products.forEach((product)=>{
    total+=product.qty*product.price;
  })
  return total;
}
  render(){
    const{products}=this.state;
    return (
      <div className="App">
        <Navbar 
        count={this.getCount()}
        />
        <Cart 
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        ondecreaseQuantity={this.handledecreaseQuantity}
        ondeleteProduct={this.handledeleteProduct}
        />
        <div  style={{fontSize:20,padding:20}} >
          Total:{this.getTotal()}
        </div>
      </div>
      
    );
  }
}

export default App;
