/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {useParams, useNavigate} from 'react-router-dom'
import combineSizeList from "../../utils/combineSizeLists";
import WarningMessage from "../WaningMessages/WarningItemQuantity";
import useCartContext from "../../hooks/useCartContext";
import JeanSizes from "../JeanSizes";
import Jeans from "../../services/jeans.services";
import SizeQuantityControl from "../SizeQuantityControl";

import "./index.css";


// eslint-disable-next-line react/prop-types
const Modal = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const productIdInt = parseInt(id, 10);
  const service = new Jeans();

  const {
    updateQuantity,
    deleteItem,
    cart,
    newSizeList, 
    setNewSizeList
  } = useCartContext(); 

  const item = service?.filterJeans(productIdInt)[0] //ya poseo el jean
  const originalSizesList = item.sizes;
 
  const sizeIndex = cart.findIndex((item) => (item.product.id === productIdInt))
  const updatedSizesList = cart[sizeIndex]?.sizes; 
 
  const [showWarning, setShowWarning] = useState(false);
  //const [newSizeList, setNewSizeList] = useState([]);

  let sizesList = combineSizeList(originalSizesList, updatedSizesList)
    useEffect(() => {
    setNewSizeList(sizesList)
  }, [])
  

  const submit = (() => {
    if(totalQuantity === 0){
      alert('para agregar un item, debes agregar al menos 1 jean')
      return false
    }
    updateQuantity(item, newSizeList, totalQuantity)
    console.log('cantidad agregada')
    navigate('/jeans')
    })

  const onDelete = (() => {
    deleteItem(item)
    navigate('/jeans')
  })

  const totalQuantity = newSizeList.reduce((acc, item) => acc + item.quantity, 0);
  //let totalQuantity = 0;

  //const totalQuantity = Object.values(newSizeList).reduce((total, qty) => total + qty, 0);

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


        <div className="modal-span">
          <span className="modal-span-title">Agregar cantidad </span>
          <span> Al agregar la cantidad, vera la actualizacion del precio</span>          
        </div>
       
        {sizesList.map((item, index) => {
           //totalQuantity += item.quantity 
          return (
              <SizeQuantityControl 
                key={index} 
                size={item.size} 
                original_quantity={item.quantity}  
                setShowWarning={setShowWarning}
                setNewSizeList={setNewSizeList}
                showButtonsState={true}
                />
          );
        })}

        <div className="modal-total-price">
          Precio total - ${((item.price)*totalQuantity).toLocaleString('es-AR')}
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
