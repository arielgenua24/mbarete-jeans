// components/Cart.js
import { useState } from 'react';
import useCartContext from '../../../hooks/useCartContext';
import CartUi from './cartUi';
import './index.css'; // Estilos separados

const Cart = () => {
    const { 
      cart,
  } = useCartContext() // Obtenemos los items del carrito

  



  return (
    <div>
      <h2>ORDEN</h2>   
      <div className="cart-items">
        {cart.map((item) => (
          <CartUi 
            key={item?.product.id}
            item={item}
            />
         
        ))}
      </div>
      

    </div>
  );
};

export default Cart;