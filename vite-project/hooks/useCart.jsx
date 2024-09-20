import { useState } from 'react';

function useCart(initialList = []) {
  const [cart, setCart] = useState(initialList);

  function findItem(item) {
   
    const foundIndex = cart.findIndex((item, index) => {
      console.log('inside the fun')
      console.log(cart[index].product.id)
      console.log(item.product.id === cart[index].product.id)
      return item.product.id === cart[index].product.id
    });
    console.log('buscando el item')
      console.log(foundIndex)
    if (foundIndex !== -1) {
      console.log('buscando el item')
      console.log(item)
      return { jean: cart[foundIndex], index: foundIndex };
    }
    
    return null;
  }

  function addItem(item, quantity) {
    console.log('llamando a addItem')
    console.log(item)
    if (!findItem(item)) {
      // Si el jean no se encuentra, entonces lo agregamos
      setCart((prevState) => [...prevState, { product: item, quantity }]); //asi se vera el array
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

  return { cart, addItem, addItemQuantity, findItem };
}

export default useCart;