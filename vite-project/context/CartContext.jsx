import React from 'react';
import useCart from '../hooks/useCart';

// Crear el contexto del carrito
const CartContext = React.createContext();


// eslint-disable-next-line react/prop-types
function CartProvider({children}) {
    const { cart, addItem, addItemQuantity, findItem, deleteItem, openModal, setOpenModal } = useCart([]);
    try {

    return (
        < CartContext.Provider 
            value={{
                cart,
                addItemQuantity, 
                findItem,
                addItem,
                deleteItem,
                openModal,
                setOpenModal
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