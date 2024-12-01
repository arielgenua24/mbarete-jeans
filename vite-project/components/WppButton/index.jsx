/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import config from "../../config/config";
import WarningMessage from "../WaningMessages/WarningItemQuantity";
import './index.css'

const WhatsAppButton = ({cart}) => {
  const [showWarning, setShowWarning] = useState(false);
  const [jeansTotalQuantity, setJeansTotalQuantity] = useState(0)
  const [RfinalPrice, setFinalPrice] = useState(0);


  useEffect(() => {
    if (showWarning) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showWarning]);


  const sendMessage = (message) => {

    const phoneNumber = config.phoneNumber; // Número de WhatsApp al que se enviará el mensaje
    const encodedMessage = encodeURIComponent(message); // Codifica el mensaje para usar en la URL
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    // Redirige a la URL de WhatsApp
    window.open(whatsappURL, '_blank');
  };

  // eslint-disable-next-line no-unused-vars
  let finalPrice = 0;
  let totalQuantity = 0
  const generateMessage = () => {
    if (cart.length === 0) {
      return (<span>Tu carrito está vacío.</span> );
    }
    

    console.log(cart)

    let message = '\n Hola MBARETE JEANS! \n he visitado su web,\n quiero comprar los siguientes items:\n\n';
    cart.forEach((item, index) => {
      let sizesAndQuantStr = ""
      const sizesList = item.sizes;
      console.log(item.totalQuantity);
      console.log(item.product)
      totalQuantity += item.totalQuantity;
     

      sizesList.forEach((item) => {
        if (item.quantity !== 0) {
          sizesAndQuantStr += `- Talle: ${item.size}, *Cantidad: ${item.quantity}*\n`;
       }
      })

      finalPrice += item.totalPrice

      message += `*${index + 1}. ${item?.product.name}* 
      ${sizesAndQuantStr}
      - Precio Unitario: *$${item?.product.price}*
      - Precio Total: *${(item.totalPrice)}*\n `;


    });

    console.log(message)
    message += `- 
    
    *Precio final de la compra: ${finalPrice}*`
    setFinalPrice(finalPrice)
    setJeansTotalQuantity(totalQuantity)
    console.log(message)
    //return message

    if(totalQuantity >=  15) {
      console.log('jeansTotalQuanity', jeansTotalQuantity)
      sendMessage(message)
    } else {
        setShowWarning(true)
        console.log('jeansTotalQuanity', jeansTotalQuantity)
        console.log('error')
    }

   

  };

  return (
    <div className="buy-item-container">
      <br />
      <button  className="buy-item" onClick={generateMessage}>
        Finalizar compra por WhatsApp
      </button>
      {showWarning && (
        <WarningMessage 
          onClose={() => {
            setShowWarning(false)
          }} 
          jeansTotalQuantity={jeansTotalQuantity}  
          />)}
    </div>
  );
};

export default WhatsAppButton;
