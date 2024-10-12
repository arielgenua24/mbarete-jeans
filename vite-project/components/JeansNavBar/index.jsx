import onNavigate from "../../utils/navigation.utils";
import './index.css'

// eslint-disable-next-line react/prop-types
const JeansNavbar = () => {
  
    return (
      <nav className="jean_nav_bar">
          <ul>
          <li>
        <a className="jean-nav-a" onClick={() => onNavigate('div-baggy')}>
          <img src="/functions/images/logos/baggy.png" alt="Icono Baggy" style={{ width: '23px', marginRight: '8px' }} />
          Baggys
        </a>
      </li>
      <li>
        <a  className="jean-nav-a"  onClick={() => onNavigate('div-bermuda')}>
          <img src="/functions/images/logos/baggy (1).png" alt="Icono Bermuda" style={{ width: '29px', marginRight: '8px' }} />
          Bermudas
        </a>
      </li>
      <li>
        <a className="jean-nav-a"  onClick={() => onNavigate('latest')}>
          <img src="/functions/images/logos/jogger icon.png" alt="Icono Stock" style={{ width: '18px', marginRight: '8px' }} />
          Últimos en stock
        </a>
      </li>
          </ul>
        </nav>
    );
};

export default JeansNavbar
  