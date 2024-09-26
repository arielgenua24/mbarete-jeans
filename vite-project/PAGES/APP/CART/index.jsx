// components/Cart.js
import { useState } from 'react';
import useCartContext from '../../../hooks/useCartContext';
import CartUi from './cartUi';
import WhatsAppButton from '../../../components/WppButton';

import './index.css'; // Estilos separados

const Cart = () => {
    const { 
      cart,
      updateQuantity
  } = useCartContext() // Obtenemos los items del carrito

  

 // <WhatsAppButton message={message}/>

  return (
    <div>
      <h2>ORDEN</h2>   
      <div className="cart-items">
        {cart.map((item) => (
          <CartUi 
            key={item?.product.id}
            item={item}
            changeQuantity={updateQuantity}
            />
        ))}
      </div>
      <WhatsAppButton cart={cart}/>
      

    </div>
  );
};

export default Cart;