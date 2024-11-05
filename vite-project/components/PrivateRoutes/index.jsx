/* eslint-disable react/prop-types */
import '../CartActionBtn/styles.css'
import { Link } from "react-router-dom";
function PrivateRoutes({ buttonState, addToCart}) {
    if(buttonState.class === 'soldOut') {
        return   (<button  className={`btn-cart ${buttonState.class || ''}`} onClick={buttonState.action}>
        {buttonState.text}
      </button>)
    }
    if(buttonState.class === 'jeanInCart') {
        return (<button to='/cart' className={`btn-cart ${buttonState.class || ''}`}> {buttonState.text} </button>)
    }
    if(buttonState.class === 'btn-add-cart') {
        return (<button to='/cart' className={`btn-cart ${buttonState.class || ''}`} onClick={() => addToCart()}> {buttonState.text} </button>)
    }

    if(!buttonState.class) {
        return null;
    }

}

export default PrivateRoutes;