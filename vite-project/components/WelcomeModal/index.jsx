import { useState } from "react";
import PropTypes from "prop-types";

const WelcomeModal = ({ onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://i.ibb.co/zzHX9T8/Chat-GPT-Image-8-abr-2025-10-38-24-p-m.png",
      title: "CAMPERAS WOW Mbarete",
      description: "LO NUEVO EN MBARETE. Camperas importadas a un precio especial, solo para vos.",
      sizes: "S, M, L, XL"
    },
    {
      image: "https://i.ibb.co/zWgCnmDF/Chat-GPT-Image-1-abr-2025-08-33-38-p-m.png",
      title: "JEANS NUEVOS A LA ALTURA DE TUS SUEÑOS",
      description: "TALLES DISPONIBLES, TODOS",
      sizes: ""
    },
    {
      image: "https://i.ibb.co/bMKfH4tS/Chat-GPT-Image-8-abr-2025-10-26-55-p-m.png",
      title: "AHORA, TAMBIEN TENEMOS CHALECOS",
      description: "TALLES DISPONIBLES, TODOS",
      sizes: ""
    }
  ];

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      // On the last slide, close the modal
      onClose();
    } else {
      // Otherwise, go to the next slide
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.imageContainer}>
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            style={styles.image}
          />
        </div>

        <div style={styles.textContainer}>
          <h1 style={styles.title}>{slides[currentSlide].title}</h1>
          <p style={styles.text}>{slides[currentSlide].description}</p>
          {slides[currentSlide].sizes && <p style={styles.sizes}>Talles disponibles: {slides[currentSlide].sizes}</p>}
        </div>

        <div style={styles.buttonContainer}>
          <button onClick={nextSlide} style={styles.button}>
            {currentSlide === slides.length - 1 ? "Listo!" : "Siguiente"}
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.07)", /* Reduced from 0.7 to 0.07 (7%) */
    /* Removed blur effect */
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    padding: "20px",
  },
  modal: {
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: "0px",
    overflow: "hidden",
    maxWidth: "400px",
    width: "100%",
    height: "70%",
    maxHeight: "70vh",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    transform: "translateY(0)",
    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  imageContainer: {
    width: "100%",
    position: "relative",
    paddingTop: "50%", /* Reduced from 100% to make the image container shorter */
    backgroundColor: "#f5f5f7",
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "90%",
    objectFit: "contain",
    transition: "transform 0.3s ease",
  },
  textContainer: {
    padding: "20px",
    flex: "0 0 auto", /* Changed from 1 1 auto to prevent excessive growth */
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "28px",
    fontWeight: "600",
    margin: "0 0 12px",
    color: "#1d1d1f",
    letterSpacing: "-0.003em",
    lineHeight: 1.2,
    maxWidth: "280px",
  },
  text: {
    fontSize: "17px",
    color: "#86868b",
    lineHeight: 1.5,
    margin: "0 0 16px",
    fontWeight: "400",
    maxWidth: "280px",
  },
  sizes: {
    fontSize: "15px",
    color: "#1d1d1f",
    marginTop: "10px",
    padding: "8px 16px",
    backgroundColor: "#f5f5f7",
    borderRadius: "0px", /* Removed rounded borders */
    display: "inline-block",
    fontWeight: "500",
  },
  buttonContainer: {
    padding: "12px 32px 20px",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#0071e3",
    color: "#fff",
    border: "none",
    borderRadius: "0px", /* Removed rounded borders */
    padding: "12px 32px",
    fontSize: "17px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s ease",
    width: "100%",
    letterSpacing: "-0.01em",
    WebkitTapHighlightColor: "transparent",
    outline: "none",
  },
  '@media (hover: hover)': {
    button: {
      '&:hover': {
        backgroundColor: "#0077ed",
        transform: "scale(1.02)",
      },
      '&:active': {
        transform: "scale(0.98)",
      },
    },
    modal: {
      '&:hover': {
        transform: "translateY(-4px)",
      },
    },
    image: {
      '&:hover': {
        transform: "translate(-50%, -50%) scale(1.05)",
      },
    },
  },
};

WelcomeModal.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default WelcomeModal;
