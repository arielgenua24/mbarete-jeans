/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import useCartContext from "../../hooks/useCartContext"; 
import './styles.css' 

// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line react/prop-types
const CartActionButton = ({ item, onAddToCart, onOpenModal }) => {
  const [buttonState, setButtonState] = useState({});

  //console.log(item)
    const {
        findItem,
        addItem,
        cart,
    } = useCartContext(); 

    const addToCart = (() => {
      console.log('new cart', item)
      addItem(item, 1)
      onAddToCart()
  });

  const viewCart = (() => {
      onOpenModal()
      console.log('viewCart');
      //aqui abririamos el modal de el carrito y finalizar la compra
  });

  const reservation = (() => {
      console.log('reservation');
      // aqui lo llevariamos a un link de google.
  });

    /*const onClose = () => {
      deleteItem(item);
      setOpenModal(false)
    }

    const submit = (() => {
      updateQuantity(item, 4)
      console.log('cantidad agregada')
      setOpenModal(false)
      }) */


    useEffect(() => {console.log('----------',cart)}, [cart])


    useEffect(() => {


        const updateButtonState = () => {
            const jeanInCart = findItem(item);
            console.log(jeanInCart)
            console.log('Cart:', cart);

            // eslint-disable-next-line react/prop-types
            if (item.state === "SoldOut") {
                setButtonState({ text: 'registrarme para preventa', action: reservation });
            } else if (item?.id === jeanInCart?.jean?.product?.id) {
              console.log(item.id) // ya esta
              //&& 
              console.log('testeando la logica del jeanInCart')
              console.log(jeanInCart.jean.product.id)
              console.log(item)
                setButtonState({ text: 'ver el carrito', action: viewCart });
            } else {
                console.log('add to cart')
                setButtonState({ text: 'añadir al carrito', action: addToCart });
            }
        };

        updateButtonState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart, item, findItem]);


  return (
    <>
      {/* openModal && 
      <Modal
        selectedItem={selectedItem}           
        cancelAct={onClose}
        submit={submit}
        quantity={quantity}
        setQuantity={setQuantity}
      /> */}


    <button  className="btn-add-cart" onClick={buttonState.action}>
      {buttonState.text}
    </button>

    
    </>
    
    
  );
};

export default CartActionButton;
