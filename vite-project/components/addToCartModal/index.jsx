/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import {useParams, useNavigate} from 'react-router-dom'
import ZoomModal from "../ZoomModal";
import combineSizeList from "../../utils/combineSizeLists";
import useCartContext from "../../hooks/useCartContext";
import Jeans from "../../services/jeans.services";
import SizeQuantityControl from "../SizeQuantityControl";
import useFirestore from "../../hooks/useFirestore";

import "./index.css";


// eslint-disable-next-line react/prop-types
const Modal = () => {



  const navigate = useNavigate()
  const { id } = useParams()
  const productIdInt = parseInt(id, 10);
  const service = useMemo(() => new Jeans(), []);
  const { products: rawProducts } = useFirestore();
  const [item, setItem] = useState(null);

  const {
    updateQuantity,
    deleteItem,
    cart,
    newSizeList, 
    setNewSizeList
  } = useCartContext(); 

  console.log(id)
  //console.log(productIdInt)

  useEffect(() => {
    if (rawProducts && rawProducts.length > 0) {
      const [found] = service.filterJeans(productIdInt, rawProducts);
      setItem(found ?? null);
      return;
    }

    const [found] = service.filterJeans(productIdInt);
    setItem(found ?? null);
  }, [rawProducts, productIdInt, service]);

  console.log(item)

  if (!item) {
    return (
      <div className="modal-container">
        <div className="modal-content">
          <h2 className="modal-title">
            {rawProducts.length > 0 ? 'Producto no encontrado' : 'Cargando producto...'}
          </h2>
          <button className="modal-delete" onClick={() => navigate('/jeans')}>
            Volver
          </button>
        </div>
      </div>
    );
  }

  const originalSizesList = item.sizes ?? [];
 
  const sizeIndex = cart.findIndex((item) => (item.product.id === productIdInt))
  const updatedSizesList = cart[sizeIndex]?.product?.sizes; 
  const sizesList = combineSizeList(originalSizesList, updatedSizesList);
  
  console.log(originalSizesList)
  console.log(updatedSizesList)
  console.log(sizeIndex)
  console.log(item)

  useEffect(() => {
    setNewSizeList(combineSizeList(originalSizesList, updatedSizesList))
  }, [originalSizesList, updatedSizesList, setNewSizeList])
  

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
          <h2 className="category-title">
              {item.category}
            </h2>

          <h1 className="modal-title">
            {item.name}
          </h1>
          
        </div>
        
       

        <div className="modal-images">
          <div className="div-modal-images div-modal-left">
              <ZoomModal>
                   <img className="zoom-modal-img modal-image-1" src={item.images.img1} alt={item.name} loading="lazy"/>     
              </ZoomModal>
          </div>
          <div className="div-modal-images div-modal-right">
            <div className="div-modal-right-up"> 
            <ZoomModal
              >
                   <img className="zoom-modal-img modal-image-2" src={item.images.img2} alt={item.name} loading="lazy"/>     
              </ZoomModal>
            </div>
            <div className="div-modal-right-down"> 
            <ZoomModal
                
              >
                   <img className="zoom-modal-img modal-image-3" src={item.images.img3} alt={item.name} loading="lazy"/>     
              </ZoomModal>
            </div>
           
            
          </div>
           
        </div>

        <div className="modal-price">
          Valor unitario - ${(item.price).toLocaleString('es-AR')}
        </div>


        <div className="modal-span">
          <span className="modal-span-title">Agregar cantidad </span>
          <span> Al agregar la cantidad, vera la actualizacion del precio</span>          
        </div>
       
       <div className="div-modal-size">
          {sizesList.map((item, index) => {
            //totalQuantity += item.quantity 
            return (
                <SizeQuantityControl 
                  area={'Modal'}
                  index={index}
                  key={index} 
                  size={item.size} 
                  setNewSizeList={setNewSizeList}
                  original_quantity={item.quantity}  
                  showButtonsState={true}
                  />
            );
          })}
        </div>

        <div className="div-modal-act-price">
          <div className="modal-total-price">
            Precio total - ${((item.price)*totalQuantity).toLocaleString('es-AR')}
          </div>

          <div className="modal-actions">
            <button className="modal-delete" onClick={onDelete}>Eliminar todo y salir</button>
            <div  className="div-modal-add">
              <img  className="div-modal-add-image" src="../../images/logos/icons8-download-24.png"></img>
              <button className="modal-add" onClick={submit}>Guardar y salir</button>
            </div>
           
          </div>
        
        </div>
        
       

      </div>
    </div>
  );
};

export default Modal;
