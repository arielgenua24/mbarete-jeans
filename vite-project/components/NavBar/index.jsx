import { NavLink } from 'react-router-dom'
import './index.css'

function Navbar() {
    let activeStyle = 'underline underline-offset-4'


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
                        🛒 
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;