// components/Cart.js
import useCartContext from '../../../hooks/useCartContext';
import CartUi from './cartUi';
import WhatsAppButton from '../../../components/WppButton';

import './index.css'; // Estilos separados
import { useState } from 'react';

const Cart = () => {
  const [finalPrice, setFinalPrice] = useState(0);


    const { 
      cart,
      updateQuantity
  } = useCartContext() // Obtenemos los items del carrito

  

 // <WhatsAppButton message={message}/>

  return (
    <div className='cart-menu'>
      <h2>ORDEN</h2> 
      <span className="scroll-hint">Deslice hacia abajo para ver todas sus órdenes</span>
      <div className="cart-items">
        {cart.map((item) => (
          <CartUi 
            key={item?.product?.id}
            item={item}
            changeQuantity={updateQuantity}
            finalPrice={finalPrice}
            />
        ))}
      </div>
      <WhatsAppButton cart={cart} setFinalPrice={setFinalPrice}/>
      

    </div>
  );
};

export default Cart;