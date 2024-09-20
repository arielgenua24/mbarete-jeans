/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import useCartContext from "../../hooks/useCartContext"; 
import './styles.css' 


// eslint-disable-next-line react/prop-types
const CartActionButton = ({ item }) => {
  const [buttonState, setButtonState] = useState({});

    const {
        findItem,
        addItem,
        cart
    } = useCartContext(); 

    const addToCart = (() => {
      console.log('add to cart')

      addItem(item, 1);
  });

  const viewCart = (() => {
      console.log('viewCart');
      //aqui abririamos el modal de el carrito y finalizar la compra
  });

  const reservation = (() => {
      console.log('reservation');
      // aqui lo llevariamos a un link de google.
  });

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
    }, [cart, item]);


  return (
    <button  className="btn-add-cart" onClick={buttonState.action}>
      {buttonState.text}
    </button>
  );
};

export default CartActionButton;
