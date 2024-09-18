import useCartContext from "../../hooks/useCartContext"; 
import './styles.css' 


// eslint-disable-next-line react/prop-types
const CartActionButton = ({ jean }) => {
    const {
        findItem,
    } = useCartContext(); 

  const addToCart = () => {
    console.log('añadir al carrito');
    //aqui en teoria abririamos el modal de agregar al carrito
  };

  const viewCart = () => {
    console.log('viewCart');
    //aqui abririamos el modal de el carrito y finalizar la compra
  };

  const reservation = () => {
    console.log('reservation');
    // aqui lo llevariamos a un link de google.
  };

  const getButtonProps = (jean) => {
    //error en esta linea, no me permite entrar al objeto jean

    const btnProps = {
        addToCart: { text: 'añadir al carrito', action: addToCart },
        viewCart: { text: 'ver el carrito', action: viewCart },
        SoldOut: { text: 'registrarme para preventa', action: reservation }
    }
    console.log(jean)
    
    // eslint-disable-next-line react/prop-types
    /*if(jean.state === "SoldOut") {
        // eslint-disable-next-line react/prop-types
        return btnProps[SoldOut]
    } else if(findItem(jean)){
        return btnProps[viewCart]
    } else {
        return btnProps[addToCart]
    } */
    return btnProps["addToCart"]

  };

  const { text, action } = getButtonProps(jean);

  return (
    <button  className="btn-add-cart" onClick={action}>
      {text}
    </button>
  );
};

export default CartActionButton;
