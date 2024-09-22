// components/Cart.js
import useCartContext from '../../../hooks/useCartContext';
import './index.css'; // Estilos separados

const Cart = () => {
  const { cart } = useCartContext(); // Obtenemos los items del carrito

  return (
    <div>
      <h2>ORDEN</h2>   
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item?.product.id} className="cart-item">
            <img src={item?.product.images?.img1} alt={item?.product.name} className="item-image" />
            <div className="item-details">
              <h3>{item?.product.name}</h3>
              <p>Price: ${item?.product.price}</p>
              <p>Quantity: {item?.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;