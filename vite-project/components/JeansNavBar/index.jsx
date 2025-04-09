import onNavigate from "../../utils/navigation.utils";
import './index.css'

const JeansNavbar = () => {
    return (
      <div className="jean-nav-container">
        <nav className="jean_nav_bar">
          <ul>
            <li>
              <a className="jean-nav-a" onClick={() => onNavigate('div-baggy')}>
                BAGGY
              </a>
            </li>
            <li>
              <a className="jean-nav-a" onClick={() => onNavigate('div-bermuda')}>
                BERMUDAS
              </a>
            </li>
            <li>
              <a className="jean-nav-a" onClick={() => onNavigate('div-camperas')}>
                CAMPERAS
              </a>
            </li>
            <li>
              <a className="jean-nav-a" onClick={() => onNavigate('div-chalecos')}>
                CHALECOS
              </a>
            </li>
            <li>
              <a className="jean-nav-a" onClick={() => onNavigate('div-jean')}>
                JEANS
              </a>
            </li>
            <li>
              <a className="jean-nav-a" onClick={() => onNavigate('div-joggers')}>
                JOGGERS
              </a>
            </li>
            <li>
              <a className="jean-nav-a" onClick={() => onNavigate('div-parachutte')}>
                PARACHUTTE
              </a>
            </li>
            <li>
              <a className="jean-nav-a" onClick={() => onNavigate('div-latest')}>
                ÚLTIMOS EN STOCK
              </a>
            </li>
            <li>
              <a className="jean-nav-a" onClick={() => onNavigate('div-new')}>
                NUEVOS
              </a>
            </li>
            <li>
              <a className="jean-nav-a" onClick={() => onNavigate('div-frisa')}>
                FRISA
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
};

export default JeansNavbar
  