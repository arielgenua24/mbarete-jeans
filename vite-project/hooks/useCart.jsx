import { useState, useEffect } from 'react';

function useCart(initialList = []) {
  const [openModal, setOpenModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null);


  // Inicializa el estado del carrito intentando recuperar los datos desde `localStorage` 
 const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : initialList;
  });

  // Efecto para guardar el carrito en `localStorage` cuando cambie el estado
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function findItem(item) {
    //console.log('item individual', item) //hasta aca llega la data
    const foundIndex = cart.findIndex((cartItem) => {
      //console.log('carrito items:', cartItem.product.id)
      //console.log('jean item:', item.id)
      return cartItem.product.id === item.id
    });
    //console.log(foundIndex)
    if (foundIndex !== -1) {
      console.log(item)
      return { jean: cart[foundIndex], index: foundIndex };
    }
    //console.log('elemento no encontrado')
    return null;
  }

  function addItem(item, quantity) {
    //console.log('llamando a addItem')
    //console.log(item.product)
    if (!findItem(item)) {
      console.log(item)
      setCart((prevState) => [...prevState, { product: item, quantity }]); //asi se vera el array
    } else {
      console.log('el jean ya se encuentra agregado')
    }
  }

  function updateQuantity(item, newQuantity) {
    console.log('ejecutando la funcion updateQuantity')
    console.log(item, newQuantity) //hasta aca yo se que me llego el item, y la cantidad

    const foundItem = findItem(item);
    console.log(item.product)
    console.log(foundItem)
    if (foundItem) {
      console.log(item, newQuantity)

      const newCart = [...cart];
      const updatedItem = {
        ...foundItem.jean,
        quantity: newQuantity, // Incrementa la cantidad
      };
      newCart[foundItem.index] = updatedItem;
      setCart(newCart); 
    }
  }

  function deleteItem(item) {
    console.log('delete item', item)
    const foundItem = findItem(item);
    if(foundItem) {
      const newCart = [...cart];
      newCart.splice(foundItem.index, 1)
      setCart(newCart); 
    }
  }

  return { cart, addItem, updateQuantity, findItem, deleteItem, openModal, setOpenModal, selectedItem, setSelectedItem };
}

export default useCart;