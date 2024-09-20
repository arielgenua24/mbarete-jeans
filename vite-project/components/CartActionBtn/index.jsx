import { useEffect, useState, useCallback } from "react";
import useCartContext from "../../hooks/useCartContext"; 
import './styles.css' 


// eslint-disable-next-line react/prop-types
const CartActionButton = ({ jean }) => {
  const [buttonState, setButtonState] = useState({});

    const {
        findItem,
        addItem,
        cart
    } = useCartContext(); 

    const addToCart = useCallback(() => {
      console.log('añadir al carrito');
      addItem(jean, 1);
  }, [addItem, jean]);

  const viewCart = useCallback(() => {
      console.log('viewCart');
      //aqui abririamos el modal de el carrito y finalizar la compra
  }, []);

  const reservation = useCallback(() => {
      console.log('reservation');
      // aqui lo llevariamos a un link de google.
  }, []);



    useEffect(() => {
        const updateButtonState = () => {
            const jeanInCart = findItem(jean);
            console.log('jeanInCart:', jeanInCart);
            console.log('Cart:', cart);

            // eslint-disable-next-line react/prop-types
            if (jean.state === "SoldOut") {
                setButtonState({ text: 'registrarme para preventa', action: reservation });
            } else if (jeanInCart) {
                setButtonState({ text: 'ver el carrito', action: viewCart });
            } else {
                setButtonState({ text: 'añadir al carrito', action: addToCart });
            }
        };

        updateButtonState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart, jean, findItem, addToCart, viewCart, reservation]);


  return (
    <button  className="btn-add-cart" onClick={buttonState.action}>
      {buttonState.text}
    </button>
  );
};

export default CartActionButton;
