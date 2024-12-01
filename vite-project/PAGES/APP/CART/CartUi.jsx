//import { useState } from 'react';
import useCartContext from '../../../hooks/useCartContext';
import SizeQuantityControl from '../../../components/SizeQuantityControl';
import EditSizesBtn from '../../../components/EditSizesBtn';

import './index.css'; // Estilos separados

  

/* eslint-disable react/prop-types */
function CartUi({item}) {
    //const [newSizeList, setNewSizeList] = useState([]);
    const { 
      deleteItem, 
      newSizeList, 
      setNewSizeList, 
      } = useCartContext()


    let sizesList = item?.sizes;
    console.log(sizesList)

    const url = `/product/${item.product.id}`;


    //let totalQuantity = newSizeList.reduce((acc, item) => acc + item.quantity, 0);
    //console.log('totalQuantity', totalQuantity);
    let totalQuantity = 0;
   

    return ( 
    
      <div key={item?.product?.id} className="cart-item">
        <div  className="cart-item-row">
          <div className='cart-img-container'>
              <img src={item?.product?.images?.img1} alt={item?.product?.name} className="item-image" loading="lazy"/>  
            </div>
          <div className="cart-item-info">
            <h3 style={{
              marginTop: "-15px",
              }}>{item?.product?.name}</h3>
            <p>Precio unitario: ${item?.product?.price}</p>
          </div>

        </div>
          
       
        {/*setShowWarning={setShowWarning}*/}
        <div className="item-details">
       
          <div className="cart-items-quantity">
            {sizesList?.map((item, index) => {
              //aca me quede, tengo que seguir metiendo elementos si es un array, porque sino solo metemos una sola vez
              
                totalQuantity += item.quantity 
              
            return (
                <SizeQuantityControl
                  key={index} 
                  size={item.size} 
                  original_quantity={item.quantity}  
                  setNewSizeList={setNewSizeList}
                  newSizeList={newSizeList}
                  showButtonsState={false}
                  />
            );
          })}
          </div>

            <div style={{
              height: "1px",
              width: "100%",
              backgroundColor: "black",
              margin: "30px 0px"
            }}></div>
            <div className='div-total-quantity'>
                <span style={{
            color: "#1887d9d9",
            fontWeight: "lighter",
          }}>Cantida total de <b>{item?.product?.name}</b>: <b>{item.totalQuantity}</b></span>
            </div>

            <div className="modal-total-price">
              Precio total - ${((item.product.price)*totalQuantity).toLocaleString('es-AR')}
            </div>
            

            <div className='div-button-cart-opts'>
              <button className='delete-item' onClick={() => deleteItem(item?.product)}>ELIMINAR</button>
              <EditSizesBtn 
                url={url} 
                text={'ver el carrito'}
                />

            </div>
            

        </div>
      </div>
  
    )

}

export default CartUi;