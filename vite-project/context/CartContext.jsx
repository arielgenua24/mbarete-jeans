import React from 'react';
import useCart from '../hooks/useCart';

// Crear el contexto del carrito
const CartContext = React.createContext();


// eslint-disable-next-line react/prop-types
function CartProvider({children}) {
    const { cart, addItem, updateQuantity, findItem, deleteItem, openModal, setOpenModal, selectedItem, setSelectedItem } = useCart([]);
    try {

    return (
        < CartContext.Provider 
            value={{
                cart,
                updateQuantity, 
                findItem,
                addItem,
                deleteItem,
                openModal,
                setOpenModal,
                selectedItem, 
                setSelectedItem
                }}>
                {children}
         </CartContext.Provider>
    )
    }catch(e){
        console.error(e)
        return <div>Error en el carrito</div>;
       
    }
    
}
export { CartContext, CartProvider }