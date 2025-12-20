import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const SecondaryNavbar = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/jeans');
    };

    return (
        <div className="secondary-navbar">
            <button className="nav-pill" onClick={handleNavigation} style={{marginLeft: '14px'}}>OFERTAS</button>
            <button className="nav-pill" onClick={handleNavigation}>BERMUDAS</button>
            <button className="nav-pill" onClick={handleNavigation}>JEANS</button>
        </div>
    );
};

export default SecondaryNavbar;
