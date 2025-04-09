/* eslint-disable react/prop-types */
import { useState } from "react";
import './styles.css'
function JeanImage({modal, children}) {
    const [isZoomed, setIsZoomed] = useState(false)

    const toggleZoom = () => {
        console.log('cambiando zoom')
        setIsZoomed((prevZoomed) => !prevZoomed); // Cambia el estado
    };


    const containerStyle  = {
        width: isZoomed ? "300px" :"100%",
        height: isZoomed ? "500px" :"100%",
        objectFit: "cover",
        zIndex: 300,
        transform: isZoomed ? "scale(3.2) translateY(45px)": "scale(1)",
        transition: "transform 0.2s ease-in-out",
      };

    const zoomOptsStyle = {
        zIndex: "300",
        position: isZoomed? "absolute" : null,
        top: isZoomed ? "170px" : null,
        height: "20px",
        width: "91px",
        transform: isZoomed ? "scale(0.45)": "scale(1)",
    }

    return ( 
        <div className="container-default-styles" style={containerStyle} onClick={toggleZoom} >
          <div className={`jean-image-container ${modal ? "jean-image-absolute" : ""}`}>
            {children}
          </div> 
           
           {!isZoomed ? 
           ( <div className="zoom-div">
                <img className="touch-icon" src="../../images/logos/icons8-touch-24.png" alt="touch-icon" style={{height: "20px", width: "20px"}}/>
                <span className="zoom-div-span">AMPLIAR</span>
             </div>): (( <div  style={zoomOptsStyle} className="zoom-div">
                <img className="touch-icon" src="../../images/logos/icons8-touch-24.png" alt="touch-icon" style={{height: "20px", width: "20px"}}/>
                <span   className="zoom-div-span">ACHICAR</span>
             </div>))}
        </div>
    )
}

export default JeanImage;