import useCartContext from "../../hooks/useCartContext"; 

const CartActionButton = ({ jean }) => {
    const {
        findItem,
        } = useCartContext(); 

  const addToCart = () => {
    console.log('añadir al carrito');
  };

  const viewCart = () => {
    console.log('viewCart');
  };

  const reservation = () => {
    console.log('reservation');
  };

  const getButtonProps = (jean) => {
    //error en esta linea, no me permite entrar al objeto jean

    const btnProps = {
        addToCart: { text: 'añadir al carrito', action: addToCart },
        viewCart: { text: 'ver el carrito', action: viewCart },
        SoldOut: { text: 'registrarme para preventa', action: reservation }
    }
    
    if(jean[state] === "SoldOut") {
        return btnProps[state]
    } else if(findItem(jean)){
        return btnProps[viewCart]
    } else {
        return btnProps[addToCart]
    }

  };

  const { text, action } = getButtonProps(jean);

  return (
    <button onClick={action}>
      {text}
    </button>
  );
};

export default CartActionButton;
