import React from "react";

const WelcomeModal = ({ onClose }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {/* Imagen ilustrativa */}
        <div style={styles.imageContainer}>
          <img
            src="../../images/home-photos/WelcomeImage.jpg" // Cambia por una URL real
            alt="Bienvenido"
            style={styles.image}
          />
        </div>

        {/* Mensaje de bienvenida */}
        <div style={styles.textContainer}>
          <h1 style={styles.title}>Bienvenido a Mbarete Jeans</h1>
          <h2 style={styles.h2}>Venta de jeans mayorista</h2>
          <h3 style={styles.h3}>Mas de 15.000 jeans vendidos a todo el pais</h3>
          <p style={styles.text}>
            Le recordamos que puede:
            <ul style={styles.list}>
              <li>Disfrutar de envíos a todo el país 🇦🇷</li>
              <li>Stock constante y entregas a tiempo</li>
              <li>Cambios fáciles, reembolsos del 100%.</li>
              <li>Servicio al cliente siempre</li>
              <li>Un control de calidad inigualable</li>
            </ul>
          </p>
        </div>

        {/* Botón */}
        <div style={styles.buttonContainer}>
          <button onClick={onClose} style={styles.button}>
            ¡Vamos!
          </button>
        </div>
      </div>
    </div>
  );
};

// Estilos en línea
const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modal: {
      position: "relative",
      backgroundColor: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      maxWidth: "600px",
      maxHeight: "90%", // Limita la altura máxima del modal
      width: "90%",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      display: "flex",
      flexDirection: "column",
    },
    imageContainer: {
      width: "100%",
      height: "auto",
      flexShrink: 0,
    },
    image: {
      width: "100%",
      height: "308px",
      display: "block",
    },
    textContainer: {
      padding: "20px",
      textAlign: "center",
      flex: "1 1 auto", // Permite que esta sección ocupe espacio flexible
      overflowY: "auto", // Agrega scroll si el contenido es largo
    },
    title: {
      fontSize: "24px",
      fontWeight: "600",
      margin: "0 0 10px",
      color: "#333",
    },
    h2: {
      fontSize: "20px",
      fontWeight: "600",
      margin: "0 0 10px",
      color: "#007BFF",
    },
    text: {
      fontSize: "16px",
      color: "#555",
      lineHeight: "1.5",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: "10px 0 0",
      textAlign: "left",
    },
    listItem: {
      marginBottom: "5px",
    },
    buttonContainer: {
      padding: "20px",
      textAlign: "center",
      borderTop: "1px solid #ddd",
    },
    button: {
      backgroundColor: "#007AFF",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#005BBB",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      backgroundColor: "transparent",
      border: "none",
      fontSize: "20px",
      cursor: "pointer",
      color: "#555",
      zIndex: 10,
    },
    h3: {
      padding: "10px",
      backgroundColor: "#f1f1f1",
    },
}
export default WelcomeModal;
