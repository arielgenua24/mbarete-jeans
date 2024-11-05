/* eslint-disable react/prop-types */
import { useState } from "react";
import {useParams, useNavigate} from 'react-router-dom'
import WarningMessage from "../WaningMessages/WarningItemQuantity";
import useCartContext from "../../hooks/useCartContext";
import JeanSizes from "../JeanSizes";
import Jeans from "../../services/jeans.services";

import "./index.css";


// eslint-disable-next-line react/prop-types
const Modal = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const productIdInt = parseInt(id, 10);
  const service = new Jeans();

  const item = service?.filterJeans(productIdInt)[0] //ya poseo el jean
  console.log(item)

  const [quantity, setQuantity] = useState(15);
  const [showWarning, setShowWarning] = useState(false);


    const {
      updateQuantity, deleteItem } = useCartContext(); 


  const submit = (() => {
    updateQuantity(item, quantity)
    console.log('cantidad agregada')
    navigate('/jeans')
    })

  const onDelete = (() => {
    deleteItem(item)
    navigate('/jeans')
  })

  const increment = () => {
    setQuantity(quantity + 1)
    
  }
  const decrement = () => {
    if (quantity > 15) {
      setQuantity(quantity - 1);
    } else if(quantity===15) {
      console.log('15')
      setShowWarning(true)
    } 
    else {
      setShowWarning(true);
    }
  };



  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-jean-data">
          <h2 className="modal-title">
            {item.name}
          </h2>
          <h3 className="category-title">
            {item.category}
          </h3>
        </div>
        
        <span className="modal-container-sizes"> 
            <JeanSizes item={item}/>
        </span>

        <div className="modal-images">
          <img className="modal-image-1" src={item.images.img1} alt={item.name} loading="lazy"/>
          <img className="modal-image-2" src={item.images.img2} alt={item.name} loading="lazy"/>
          <img className="modal-image-3" src={item.images.img3} alt={item.name} loading="lazy"/>
        </div>

        <div className="modal-price">
          Valor unitario - ${(item.price).toLocaleString('es-AR')}
        </div>

        <div className="modal-price">
          Cantidad: {quantity} - ${(item.price * quantity).toLocaleString('es-AR')}
        </div>

        <div className="modal-span">
          <span className="modal-span-title">Agregar cantidad </span>
          <span> Al agregar la cantidad, vera la actualizacion del precio</span>          
        </div>
       

        <div className="modal-quantity">
          <button className="modal-btn" onClick={decrement}>-</button>
          <span>{quantity}</span>
          <button className="modal-btn" onClick={increment}>+</button>
        </div>

        <div className="modal-actions">
          <button className="modal-cancel" onClick={onDelete}>Cancelar</button>
          <button className="modal-add" onClick={submit}>Añadir</button>
        </div>
        
        {showWarning && <WarningMessage onClose={() => setShowWarning(false)} />}

      </div>
    </div>
  );
};

export default Modal;
