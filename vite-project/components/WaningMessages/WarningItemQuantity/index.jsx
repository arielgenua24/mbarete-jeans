import './styles.css';
import config from '../../../config/config';

const sendMessage = (message) => {
  const phoneNumber = config.phoneNumber; // Número de WhatsApp al que se enviará el mensaje
  const encodedMessage = encodeURIComponent(message); // Codifica el mensaje para usar en la URL
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  
  // Redirige a la URL de WhatsApp
  window.open(whatsappURL, '_blank');
};

// eslint-disable-next-line react/prop-types
const WarningMessage = ({ onClose }) => {
  return (
    <div className="showWarning">
      <div className="showWarning-content">
        <span className="showWarning-text showWarning-text-1">Hola, querido cliente.</span>
        <span className="showWarning-text">
          Queremos recordarte que el límite de compra mínima es de <b>15 unidades</b>.
        </span>
        <span className="showWarning-text">
          Si necesitas ayuda, <a onClick={() => sendMessage('')}>háblanos por WhatsApp</a>. Saludos.
        </span>
        <button className="showWarningBtn" onClick={onClose}>
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default WarningMessage;
