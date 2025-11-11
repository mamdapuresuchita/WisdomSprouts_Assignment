import React, { useContext } from 'react'
import { CartContext } from '../hooks/CartContext'
//import ThemeContext from '../hooks/ThemeContext'

const Cart = () => {
    const {cart,removeFromCart} = useContext(CartContext);
    //const {theme} = useContext(ThemeContext)

    // Calculate total Price of Products
    const totalPrice = cart.reduce((sum,item)=>sum + Number(item.price),0);
    
  return (
    <div>

        <h2>Your Cart</h2>

        {cart.length === 0?(<div>
            <h4>Your Cart is empty. Add products</h4>
        </div>):(
            <>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {cart.map((item)=>(
    <tr>
        <td><img src='{item.image}'></img></td>
        
      
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td><button onClick={()=>removeFromCart(item.id)}>Remove from Cart</button></td>
    </tr>
    ))}



    
  </tbody>
</table>

<div className="totalPrice">
    <h4>Total:{""}<span>{totalPrice}</span></h4>
</div>

</>
        )}


    </div>
  )
}

export default Cart