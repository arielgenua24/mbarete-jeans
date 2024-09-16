import onNavigate from "../../utils/navigation.utils";

// eslint-disable-next-line react/prop-types
const Navbar = () => {
  
    return (
      <nav>
          <ul>
            <li> back </li>
            <li><a onClick={() => onNavigate('div-baggy')}>Baggys</a></li>
            <li><a onClick={() => onNavigate('latest')}>Últimos en stock</a></li>
          </ul>
        </nav>
    );
};

export default Navbar
  