import { useState } from 'react';
import useCartContext from '../../../hooks/useCartContext';
import './index.css'; // Estilos separados

  

/* eslint-disable react/prop-types */
function CartUi({item, changeQuantity}) {
    const [newQuantity, setQuantity] = useState(false);

    const { 
      deleteItem,
  } = useCartContext()


    const increment = (quantity) => {
      if(newQuantity) {
        setQuantity(newQuantity+1)
        changeQuantity(item.product, newQuantity+1)
      } else { 
        setQuantity(quantity + 1)
        changeQuantity(item.product, quantity +1)
      }
        

    }
    const decrement = (quantity) => {
      if(newQuantity) {
        setQuantity(newQuantity-1)
        changeQuantity(item.product, newQuantity-1)
      } else { 
        setQuantity(quantity - 1)
        changeQuantity(item.product, quantity - 1)
      }
    };





    return ( 
    
      <div key={item?.product.id} className="cart-item">
        <img src={item?.product.images?.img1} alt={item?.product.name} className="item-image" />
        <div className="item-details">
          <h3>{item?.product.name}</h3>
          <p>Precio: ${(item?.product.price*item?.quantity)}</p>
          <p>Cantidad: { newQuantity || item?.quantity}</p>
        </div>
        <button onClick={() => deleteItem(item.product)}>ELIMINAR</button>
        <div className="cart-items-quantity">
          <button className="cart-items-btn" onClick={()=> decrement(item?.quantity)}>-</button>
          <button className="cart-items-btn" onClick={()=> increment(item?.quantity)}>+</button>
        </div>
      </div>
  
    )

}

export default CartUi;