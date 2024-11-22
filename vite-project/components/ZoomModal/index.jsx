import './styles.css'
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function ZoomModal({ children }) {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            {isOpen ? (
            <div className="div-zoom-modal">
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button onClick={()=> setIsOpen(false)}>Cerrar</button>
                        <div className="div-modal-img">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            ) : (
                <div className='div-zoom-position'
                    onClick={() => setIsOpen(true)}
                >
                    {children}
                   <div className="zoom-div" 
                         style={{ position: 'sticky' }}
                        onClick={() => setIsOpen(true)}
                    >
                        <img className="touch-icon" src="../../public/images/logos/icons8-touch-24.png" alt="touch-icon"/>
                        <span className="zoom-div-span">AMPLIAR</span>
                    </div>
                </div>
            )}
        </>
    );
}

export default ZoomModal;
