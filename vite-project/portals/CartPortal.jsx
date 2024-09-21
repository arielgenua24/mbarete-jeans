import { createPortal } from 'react-dom';
import './index.css'

function CartPortal({children}){
    return createPortal(
        <div> 
            <h2>CART PORTAL </h2>
            {children}
        </div>,
        document.getElementById('cartModal')
    )
}

export default CartPortal
