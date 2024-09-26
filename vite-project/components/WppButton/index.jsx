
const WhatsAppButton = (message) => {

  const sendMessage = () => {
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
      <button onClick={sendMessage}>
        finalizar compra por whatsapp
      </button>
    </div>
  );
};

export default WhatsAppButton;
