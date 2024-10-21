import { useState } from 'react';
import useCartContext from '../../../hooks/useCartContext';
import './index.css'; // Estilos separados

  

/* eslint-disable react/prop-types */
function CartUi({item, changeQuantity}) {
    const [newQuantity, setQuantity] = useState(false); //procedo a setear una cantidad si no la hay

    const { 
      deleteItem,
  } = useCartContext()


    const increment = (quantity) => {
      if(newQuantity) {
        setQuantity(newQuantity+1)
        changeQuantity(item.product, newQuantity+1)
      } else { 
        setQuantity(quantity + 1) //se setea una cantidad si no la hay
        changeQuantity(item.product, quantity +1)
      }
        

    }
    const decrement = (quantity) => {
      if(newQuantity && quantity > 15) {
        console.log('cambiando la cantidad a 15')
        setQuantity(newQuantity-1)
        changeQuantity(item.product, newQuantity-1)
      } else { 
        if (quantity > 15){
          setQuantity(quantity - 1);
          changeQuantity(item.product, quantity - 1)
        }        
      }
    };





    return ( 
    
      <div key={item?.product.id} className="cart-item">
        <div className='cart-img-container'>
           <img src={item?.product.images?.img1} alt={item?.product.name} className="item-image" loading="lazy"/>  
        </div>
       
       
        <div className="item-details">
        <h3>{item?.product.name}</h3>
          <p>Precio unitario: ${item?.product.price}</p>
          <div className="cart-items-quantity">
            <button className="cart-items-btn" onClick={()=> decrement(item?.quantity)}>-</button>
            <p>Cantidad: { newQuantity || item?.quantity}</p>
            <button className="cart-items-btn" onClick={()=> increment(item?.quantity)}>+</button>
          </div>

          <p className='item-total_price'> <b>Precio total: ${(item?.product.price*item?.quantity)}</b></p>

          <button className='delete-item' onClick={() => deleteItem(item.product)}>ELIMINAR</button>

        </div>
      </div>
  
    )

}

export default CartUi;