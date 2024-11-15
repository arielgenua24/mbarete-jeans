import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './styles.css'


// eslint-disable-next-line react/prop-types
function SizeQuantityControl({size, original_quantity, setNewSizeList, showButtonsState}) {
    const [quantity, setQuantity] = useState(original_quantity);
    const [showButtons, setShowButtons] = useState(showButtonsState)
    const location = useLocation().pathname;
    console.log(location)


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
        <div className="modal-quantity">
            <div className="size-info">
                <span>TALLE: {size}</span>
            </div>
            <div className="quantity-controls">
              <span> CANTIDAD:  {quantity}</span>
              {showButtons && (
                <>
                  <button className="modal-btn" onClick={decrement}>-</button>
                  <button className="modal-btn" onClick={increment}>+</button>
                </>
               
            )}
            </div> 
    </div>)
}

export default SizeQuantityControl;