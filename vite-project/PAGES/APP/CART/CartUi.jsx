import { useState } from 'react';
import useCartContext from '../../../hooks/useCartContext';
import SizeQuantityControl from '../../../components/SizeQuantityControl';
import './index.css'; // Estilos separados

  

/* eslint-disable react/prop-types */
function CartUi({item, changeQuantity}) {
    const [newQuantity, setQuantity] = useState(false); //procedo a setear una cantidad si no la hay
    const [newSizeList, setNewSizeList] = useState([]);


    console.log('imprimiendo desde cart')
    console.log(item)

    const { 
      deleteItem,
  } = useCartContext()

  let sizesList = item?.sizes;

  console.log(sizesList)

    const increment = (quantity) => {
      if(newQuantity) {
        setQuantity(newQuantity+1)
        changeQuantity(item?.product, newQuantity+1)
      } else { 
        setQuantity(quantity + 1) //se setea una cantidad si no la hay
        changeQuantity(item?.product, quantity +1)
      }
        

    }
    const decrement = (quantity) => {
      if(newQuantity && quantity > 15) {
        console.log('cambiando la cantidad a 15')
        setQuantity(newQuantity-1)
        changeQuantity(item?.product, newQuantity-1)
      } else { 
        if (quantity > 15){
          setQuantity(quantity - 1);
          changeQuantity(item?.product, quantity - 1)
        }        
      }
    };



    const totalQuantity = newSizeList.reduce((acc, item) => acc + item.quantity, 0);
    console.log('totalQuantity', totalQuantity);

    return ( 
    
      <div key={item?.product?.id} className="cart-item">
        <div className='cart-img-container'>
           <img src={item?.product?.images?.img1} alt={item?.product?.name} className="item-image" loading="lazy"/>  
        </div>
       
        {/*setShowWarning={setShowWarning}*/}
        <div className="item-details">
        <h3>{item?.product?.name}</h3>
          <p>Precio unitario: ${item?.product?.price}</p>
          <div className="cart-items-quantity">
            {sizesList?.map((item, index) => {
            return (
                <SizeQuantityControl 
                  key={index} 
                  size={item.size} 
                  original_quantity={item.quantity}  
                  setNewSizeList={setNewSizeList}
                  newSizeList={newSizeList}
                  />
            );
          })}
            <button className="cart-items-btn" onClick={()=> decrement(item?.quantity)}>-</button>
            <p>Cantidad: { newQuantity || item?.quantity}</p>
            <button className="cart-items-btn" onClick={()=> increment(item?.quantity)}>+</button>
          </div>

          <p className='item-total_price'> <b>Precio total: ${(item?.product?.price*item?.quantity)}</b></p>

          <button className='delete-item' onClick={() => deleteItem(item?.product)}>ELIMINAR</button>

        </div>
      </div>
  
    )

}

export default CartUi;