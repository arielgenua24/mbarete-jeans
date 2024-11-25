import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './styles.css'


// eslint-disable-next-line react/prop-types
function SizeQuantityControl({area, index, size, original_quantity, setNewSizeList, showButtonsState}) {
    const [quantity, setQuantity] = useState(original_quantity);
    const [showButtons, setShowButtons] = useState(showButtonsState)
    const location = useLocation().pathname;


    let containerClass = index === 0 || index % 2 === 0 ? "modal-quantity bckg-gray" : "modal-quantity bckg-white";
    console.log(location)



    if (quantity === 0 && !area) {
      containerClass += " border-red";
    } 


    const increment = () => {
        setQuantity(quantity + 1); //aca esta el problema a solucionar
        
        setNewSizeList((prevState) => {
            let newSizeList = [...prevState];
            let index = prevState.findIndex((item) => (item.size === size));
            if (index !== -1) { //encontre el objeto
              newSizeList[index].quantity = quantity + 1;
            } else { //no lo encontre
              newSizeList.push({ size: size, quantity: quantity + 1 });
            }
            return newSizeList;
          });
        
    };
    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            setNewSizeList((prevState) => {
                let newSizeList = [...prevState];
                let index = prevState.findIndex((item) => (item.size === size));
                if (index !== -1) { //encontre el objeto
                  newSizeList[index].quantity = quantity - 1;
                } 
                return newSizeList;
              });
        }
    };



    return(
        <div className={containerClass}>
            <div className="size-info">
                <span>TALLE: {size}</span>
            </div>
            <div className="quantity-controls">
             
              {showButtons ? (
                <>
                  <button className="modal-btn" onClick={decrement}>-</button>
                    <span> CANTIDAD:  {quantity}</span>
                  <button className="modal-btn" onClick={increment}>+</button>
                </> 
            ) : (  <span> CANTIDAD:  {quantity}</span>)}
            </div> 
    </div>)
}

export default SizeQuantityControl;