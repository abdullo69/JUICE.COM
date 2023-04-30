import React, { useState } from "react"
import './App.css';
import Main from './components/Home/Main/Main';
import Add_to_cart from './Add_to_cart/Add_to_cart';


const [CartItem, setCartItem] = useState([])

const addToCart = (product) => {
  const productExit = CartItem.find((item) => item.id === product.id)
  if (productExit) {
    setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
  } else {

    setCartItem([...CartItem, { ...product, qty: 1 }])
  }
}
function App() {
  return (
    <div className="App">
      <Main />
      <Add_to_cart addToCart={addToCart} />
    </div>
  );
}

export default App;
