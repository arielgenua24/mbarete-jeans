import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useCartContext from '../../hooks/useCartContext';
import './index.css'

function Navbar() {
    const [isAnimating, setIsAnimating] = useState(false);
    const { cart } = useCartContext();
    const backgroundColor = cart.length > 0 ? '#75b9e135' : 'transparent';

    useEffect(() => {
        if (cart.length > 0) {
            setIsAnimating(true);
            const timer = setTimeout(() => setIsAnimating(false), 500);
            return () => clearTimeout(timer);
        }
    }, [cart]);
    {/*  */ }
    return (
        <div className='navbar-container' style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 9000,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            backgroundColor: '#ffffff'
        }}>
            <nav className='navbar'>
                <div className='navbar-brand'>
                    <NavLink to='/jeans' className='brand-link'>MBARETE</NavLink>
                </div>
                <div className='navbar-cart'>
                    <NavLink to='/cart' className='cart-link'>
                        <motion.div
                            className="cart-container"
                            style={{ backgroundColor }}
                            animate={isAnimating ? { scale: 1.2 } : {}}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                className="cart-icon"
                                animate={isAnimating ? { scale: [1.1, 1.2, 1.1] } : {}}
                                transition={{ duration: 0.9 }}
                            >
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                </div>
                            </motion.div>
                            {cart.length > 0 && (
                                <span className="cart-count">{cart.length}</span>
                            )}
                            <span className="cart-text">CARRITO</span>
                        </motion.div>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;