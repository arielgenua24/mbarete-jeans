import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useCartContext from '../../hooks/useCartContext';
import './index.css'

function Navbar() {
    const [isAnimating, setIsAnimating] = useState(false);
    const { cart } = useCartContext();
    let activeStyle = 'underline underline-offset-4'
    const backgroundColor = cart.length > 0 ? '#75b9e135' : 'transparent';

    console.log('estamos animando', cart.length)


    useEffect(() => {
        if (cart.length > 0) {
        console.log('estamos animando', cart)
        console.log(isAnimating)
          setIsAnimating(true);
          //console.log(isAnimating)
          const timer = setTimeout(() => setIsAnimating(false), 500);
          return () => clearTimeout(timer);
        }
      }, [cart]);
    


    return ( 
        <nav className='navbar'>
            <ul className=''>
                <li>
                    <NavLink
                        className='' 
                        to='/home/index.html'> 
                        HOME 
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className='' 
                        to='/jeans'> 
                        JEANS 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/cart'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    > 
                       <motion.div 
                        className="cart-container"
                        style={{ backgroundColor }}
                        animate={isAnimating ? { 
                        scale: 1.6, 
                        } : {}}
                        transition={{ duration: 0.5 }}
                        >
                        <motion.div
                        className="cart-icon"
                        animate={isAnimating ? { scale: [1.1, 1.2, 1.1] } : {}}
                        transition={{ duration: 0.9 }}
                        >
                        <div>
                            🛒 
                        </div>
                        </motion.div>
                        {cart.length > 0 && (
                        <span className="cart-count">{cart.length}</span>
                        )}
                        <span className="cart-text">Carrito</span>
                    </motion.div>
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;