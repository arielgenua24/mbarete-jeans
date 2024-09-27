import onNavigate from "../../utils/navigation.utils";
import './index.css'

// eslint-disable-next-line react/prop-types
const JeansNavbar = () => {
  
    return (
      <nav className="jean_nav_bar">
          <ul>
            <li> back </li>
            <li><a onClick={() => onNavigate('div-baggy')}>Baggys</a></li>
            <li><a onClick={() => onNavigate('div-bermuda')}>Bermudas</a></li>
            <li><a onClick={() => onNavigate('latest')}>Últimos en stock</a></li>
          </ul>
        </nav>
    );
};

export default JeansNavbar
  