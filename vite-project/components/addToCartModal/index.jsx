/* eslint-disable react/prop-types */
import { useState } from "react";
import useCartContext from "../../hooks/useCartContext";
import "./index.css";


// eslint-disable-next-line react/prop-types
const Modal = ({item, onCancel ,onClose}) => {
  console.log(item)

  const [quantity, setQuantity] = useState(1);

    const {
      updateQuantity, deleteItem } = useCartContext(); 


  const submit = (() => {
    updateQuantity(item, quantity)
    console.log('cantidad agregada')
    onClose()
    })

  const onDelete = (() => {
    deleteItem(item)
    onClose()
  })

  const increment = () => {
    setQuantity(quantity + 1)
    
  }
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };


  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2 className="modal-title">
          {item.name}
        </h2>
        <h3 className="category-title">
          {item.category}
        </h3>
        <span> 
            {item.talles}
        </span>

        <div className="modal-images">
          <img src={item.images.img1} alt={item.name} />
          <img src={item.images.img2} alt={item.name} />
          <img src={item.images.img3} alt={item.name} />
        </div>

        <div className="modal-price">
          ${(item.price * quantity).toLocaleString('es-AR')}
        </div>

        <div className="modal-subtitle">Agregar cantidad</div>
        <span> al agregar la cantidad, vera la actualizacion del precio</span>

        <div className="modal-quantity">
          <button className="modal-btn" onClick={decrement}>-</button>
          <span>{quantity}</span>
          <button className="modal-btn" onClick={increment}>+</button>
        </div>

        <div className="modal-actions">
          <button className="modal-cancel" onClick={onDelete}>Cancelar</button>
          <button className="modal-add" onClick={submit}>Añadir</button>
        </div>
        
      </div>
    </div>
  );
};

export default Modal;
