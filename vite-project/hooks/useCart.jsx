import { useState, useEffect } from 'react';

function useCart(initialList = [{}]) {
  const [openModal, setOpenModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null);
  const [newSizeList, setNewSizeList] = useState([]);


  // Inicializa el estado del carrito intentando recuperar los datos desde `localStorage` 
 const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : initialList;
  });

  // Efecto para guardar el carrito en `localStorage` cuando cambie el estado
 /* useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]); */



  function findItem(item) {
    const foundIndex = cart.findIndex((cartItem) => {
      return cartItem?.product?.id === item?.id
    });
    if (foundIndex !== -1) {
      console.log(item)
      return { jean: cart[foundIndex], index: foundIndex };
    }
    return null;
  }

  function addItem(item, quantity) {
    if (!findItem(item)) {
      console.log('añadiendo items al carrito en el localStorage')
      console.log(item)
      setCart((prevState) => [...prevState, { product: item, quantity }]); //asi se vera el array
    } else {
      console.log('el jean ya se encuentra agregado')
    }
  }

  function updateQuantity(item, sizesList) {
    console.log('ejecutando la funcion updateQuantity')
    //console.log(item, newQuantity) //hasta aca yo se que me llego el item, y la cantidad

    const foundItem = findItem(item);
    console.log(item.product)
    console.log(foundItem)
    if (foundItem) {
      console.log(item, sizesList)
      const newCart = [...cart];
      const updatedItem = {
        ...foundItem.jean,  // Incrementa la cantidad
        sizes: sizesList
      };
      
      newCart[foundItem.index] = updatedItem; //esto funciona, pero primero se inicializan y luego se hace el console.log
      setCart(newCart); 
      console.log(newCart)
      console.log(cart)


      localStorage.setItem('cart', JSON.stringify(newCart))
      console.log('primero me imprimo yo, newCart sin actualizar')
      console.log(newCart)
    }
  }

  function deleteItem(item) {
    const foundItem = findItem(item);
    if(foundItem) {
      console.log('delete item', item)
      const newCart = [...cart];
      newCart.splice(foundItem.index, 1)
      localStorage.setItem('cart', JSON.stringify(newCart))
      setCart(newCart); 
    }
  }

  return { cart, addItem, updateQuantity, findItem, deleteItem, openModal, setOpenModal, selectedItem, setSelectedItem, newSizeList, setNewSizeList};
}

export default useCart;