/* eslint-disable react/prop-types */
import config from "../../config/config";
const WhatsAppButton = ({cart}) => {

  const sendMessage = (message) => {
    const phoneNumber = config.phoneNumber; // Número de WhatsApp al que se enviará el mensaje
    const encodedMessage = encodeURIComponent(message); // Codifica el mensaje para usar en la URL
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    // Redirige a la URL de WhatsApp
    window.open(whatsappURL, '_blank');
  };



  const generateMessage = () => {
    if (cart.length === 0) {
      return (<span>Tu carrito está vacío.</span> );
    }
    console.log(cart)

    let message = '\n Hola MBARETE JEANS! \n he visitado su web,\n quiero comprar los siguientes items:\n\n';
    cart.forEach((item, index) => {
      let sizesAndQuantStr = ""
      console.log(item, index)
      console.log('Precio Total:', (item.totalPrice)) 
      const sizesList = item.sizes;
      sizesList.forEach((item) => {
        if (item.quantity !== 0) {
          sizesAndQuantStr += `Talle: ${item.size}, Cantidad: ${item.quantity}\n`;
       }
      })

      message += `${index + 1}. ${item?.product.name} 
      - ${sizesAndQuantStr}
      - Precio Unitario: $${item?.product.price} 
      - Precio Total: ${(item.totalPrice)}\n `;


    });

    const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    message += `\nTotal a pagar: $${total}`;

    console.log(message)

    //return message

    sendMessage(message)

  };

  return (
    <div>
      <br />
      <button  className="buy-item" onClick={generateMessage}>
        finalizar compra por whatsapp
      </button>
    </div>
  );
};

export default WhatsAppButton;
