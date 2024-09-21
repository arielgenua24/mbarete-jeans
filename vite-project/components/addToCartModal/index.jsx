import { useState } from "react";
import "./index.css"; // Para agregar estilos adicionales si es necesario

// eslint-disable-next-line react/prop-types
const Modal = ({ setOpenModal, cancelAct }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const onClose = () => {
    cancelAct()
    setOpenModal(false)
  } 




  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2 className="modal-title">Carrito de Compras</h2>
        
        <div className="modal-images">
          <img src="/img1.jpg" alt="Producto 1" />
          <img src="/img2.jpg" alt="Producto 2" />
          <img src="/img3.jpg" alt="Producto 3" />
        </div>

        <div className="modal-price">Precio: $15.000</div>

        <div className="modal-subtitle">Agregar cantidad</div>
        
        <div className="modal-quantity">
          <button className="modal-btn" onClick={decrement}>-</button>
          <span>{quantity}</span>
          <button className="modal-btn" onClick={increment}>+</button>
        </div>

        <div className="modal-actions">
          <button className="modal-cancel" onClick={onClose}>Cancelar</button>
          <button className="modal-add">Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
