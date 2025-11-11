import React,{createContext} from 'react'

export const CartContext = createContext({
    cart:[],
    cartLength:[],
    addToCart:()=>{},
    removeFromCart:()=>{}
});

// const CartContext = () => {

// function createContext(){
//     cart :[],
//     cartLength:[],
//     addToCart:()=>{},
//     removeFromCart:()=>{}
// }
//   return (
//     <>
//     createContext()
//     </>
//   )
// }

// export default CartContext