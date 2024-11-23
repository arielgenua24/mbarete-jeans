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
                    <div className="zoom-modal-content">
                        <div className='modal-div-btn'>
                            <div className='modal-div-close'>
                                <div  className="modal-button-close button-close" onClick={()=> setIsOpen(false)}>   
                                <img className="touch-icon" src="../../public/images/logos/icons8-close-24.png" alt="touch-icon"/>
                                </div>
                            </div>
                           
                        </div>
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
