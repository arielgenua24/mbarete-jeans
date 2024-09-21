import { useState } from 'react';

function useCart(initialList = []) {
  const [cart, setCart] = useState(initialList);
  const [openModal, setOpenModal] = useState(false)

  function findItem(item) {
    console.log('item individual', item)
    const foundIndex = cart.findIndex((cartItem) => {
      return cartItem.product.id === item.id
    });
    //console.log('buscando el item')
      //console.log(foundIndex)
    if (foundIndex !== -1) {
      //console.log('buscando el item')
      console.log(item)
      return { jean: cart[foundIndex], index: foundIndex };
    }
    
    return null;
  }

  function addItem(item, quantity) {
    console.log('llamando a addItem')
    console.log(item)
    if (!findItem(item)) {
      console.log(item)

      // Si el jean no se encuentra, entonces lo agregamos
      setCart((prevState) => [...prevState, { product: item, quantity }]); //asi se vera el array
    } else {
      console.log('el jean ya se encuentra agregado')
    }
  }

  function addItemQuantity(item) {
    const foundItem = findItem(item);
    if (foundItem) {
      const newCart = [...cart];
      const updatedItem = {
        ...foundItem.jean,
        quantity: foundItem.jean.quantity + 1, // Incrementa la cantidad
      };
      newCart[foundItem.index] = updatedItem;
      setCart(newCart); 
    }
  }

  function deleteItem(item) {
    const foundItem = findItem(item);
    if(foundItem) {
      const newCart = [...cart];
      newCart.splice(foundItem.index, 1)
      setCart(newCart); 
    }
  }

  return { cart, addItem, addItemQuantity, findItem, deleteItem, openModal, setOpenModal };
}

export default useCart;