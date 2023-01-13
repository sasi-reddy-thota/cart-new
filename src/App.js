import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import { doc } from 'firebase/firestore';


class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[],
        loading:true
    }
    this.db=firebase.firestore();
  }
  componentDidMount(){
    this.db
    .collection('products')
    .onSnapshot((snapshot)=>{
      console.log(snapshot);
      snapshot.docs.map((doc)=>{
        console.log(doc.data());
      })

      const products=snapshot.docs.map((doc)=>{
        const data=doc.data();
        data['id']=doc.id;
        return data;
      }
      )

      this.setState({
        products,
        loading:false
      })
    })
  }
  handleIncreaseQuantity=(product)=>{
    console.log('Hey please increase the quantity of ',product);
    const {products}=this.state;
    const index=products.indexOf(product);

    const docRef=this.db.collection('products').doc(products[index].id);

    docRef.update({
      qty:products[index].qty+1
    })
    .then(()=>{
      console.log('Updated Successfully Updated');
    })
    .catch((err)=>{
      console.log('Error:',err);
    })
    // products[index].qty+=1;
    // this.setState({
    //     products:products
    // });
  }
handledecreaseQuantity=(product)=>{
    console.log('Hey please increase the quantity of ',product);
    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty>0)
    {
      const docRef=this.db.collection('products').doc(products[index].id);

      docRef.update({
        qty:products[index].qty-1
      })
      .then(()=>{
        console.log('Updated Successfully Updated');
      })
      .catch((err)=>{
        console.log('Error:',err);
      })
    }
        
}
handledeleteProduct=(productId) => {
    console.log('Hey please delete the product ',productId);
    const {products}=this.state;

    const docRef=this.db.collection('products').doc(productId);

    docRef.delete({
    })
    .then(()=>{
      console.log('Deleted Successfully');
    })
    .catch((err)=>{
      console.log('Error:',err);
    })

    // const items =products.filter((item)=>item.id!==productId);
    // this.setState({
    //     products:items
    // });
        
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
  const{products,loading}=this.state;
  return (
    <div className="App">
      <Navbar className="nav-bar"
      count={this.getCount()}
      />
      <h1>My Cart</h1>
      <Cart className="cart"
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      ondecreaseQuantity={this.handledecreaseQuantity}
      ondeleteProduct={this.handledeleteProduct}
      />
      {loading && <h3>Your Products are Loading...</h3>}
      <div  style={{fontSize:25,padding:20,fontFamily:'monospace'}} >
        Total:{this.getTotal()}
      </div>
    </div>
    
  );
  }
}

export default App;
