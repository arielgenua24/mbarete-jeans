import { useState } from "react";


// eslint-disable-next-line react/prop-types
function SizeQuantityControl({size, original_quantity, setNewSizeList}) {
    const [quantity, setQuantity] = useState(original_quantity);
    

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
                <button className="modal-btn" onClick={decrement}>-</button>
                <span>{quantity}</span>
                <button className="modal-btn" onClick={increment}>+</button>
            </div>
    </div>)
}

export default SizeQuantityControl;