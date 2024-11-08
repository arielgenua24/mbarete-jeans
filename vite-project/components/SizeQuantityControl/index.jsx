import { useState } from "react";

// eslint-disable-next-line react/prop-types
function SizeQuantityControl({size, original_quantity, setShowWarning, setNewSizeList, newSizeList}) {
    const [quantity, setQuantity] = useState(original_quantity);
    

    const increment = () => {
        setQuantity(quantity + 1);
        setNewSizeList((prevState) => ({
            ...prevState,
            size: size,  // Actualizar solo el tamaño específico
            quantity: quantity + 1 
        }));
        console.log(newSizeList)
    };
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            console.log('cuidado con la cantidad')
            setShowWarning(true)
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