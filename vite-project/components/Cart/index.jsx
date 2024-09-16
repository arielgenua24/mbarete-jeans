import { useState } from 'react';
import useCartContext from '../../hooks/useCartContext'; // Asegúrate de que la ruta sea correcta

function Cart() {
  const {
    cart,
    addItemQuantity, 
    findItem,
    addItem
    } = useCartContext();  // Accedemos al carrito y a la función para actualizarlo
  const [newItem, setNewItem] = useState('');  // Estado para el nuevo ítem a agregar
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad

  // Función para agregar un ítem al carrito
  const addItemToCart = () => {
    const item = { id: Math.random(), name: newItem };  // Creas un nuevo ítem con un ID único
    addItem(item, quantity) // Actualizamos el carrito
    setNewItem('');  // Reseteamos el campo de entrada
    setQuantity(1);  // Reseteamos la cantidad
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      
      {/* Mostrar los ítems en el carrito */}
      <ul>
        {cart?.map((item, index) => (
          <li key={index}>
            {item.product.name} - Cantidad: {item.quantity}
          </li>
        ))}
      </ul>

      {/* Inputs para agregar un nuevo ítem */}
      <input 
        type="text" 
        value={newItem} 
        onChange={(e) => setNewItem(e.target.value)} 
        placeholder="Nombre del ítem"
      />
      <input 
        type="number" 
        value={quantity} 
        onChange={(e) => setQuantity(Number(e.target.value))} 
        min="1"
      />
      <button onClick={addItemToCart}>Agregar al carrito</button>
    </div>
  );
}

export default Cart;
