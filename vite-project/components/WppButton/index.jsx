/* eslint-disable react/prop-types */

const WhatsAppButton = ({cart}) => {

  const generateMessage = () => {
    if (cart.length === 0) {
      return 'Tu carrito está vacío.';
    }
    console.log(cart)

    let message = 'Quiero comprar los siguientes items:\n\n';
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item?.product.name} - Cantidad: ${item?.quantity} - Precio: $${item?.product.price}\n`;
    });

    const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    message += `\nTotal a pagar: $${total}`;

    console.log(message)

    //return message

    //sendMessage(message)

  };




  const sendMessage = (message) => {
    const phoneNumber = '1137839767'; // Número de WhatsApp al que se enviará el mensaje
    const encodedMessage = encodeURIComponent(message); // Codifica el mensaje para usar en la URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Redirige a la URL de WhatsApp
    window.open(whatsappURL, '_blank');
  };

  return (
    <div>
      <h3>Enviar mensaje por WhatsApp</h3>
      <br />
      <button onClick={generateMessage}>
        finalizar compra por whatsapp
      </button>
    </div>
  );
};

export default WhatsAppButton;
