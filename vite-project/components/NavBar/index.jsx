import handleNavigate from "../../../utils/navigation.utils";



// eslint-disable-next-line react/prop-types
const Navbar = ({ onNavigate }) => {
    return (
      <nav>
        <ul>
          <li> back </li>
          <li><a href="#jeans" onClick={() => onNavigate('jeans')}>Jeans</a></li>
          <li><a href="#latest" onClick={() => onNavigate('latest')}>Últimos en stock</a></li>
        </ul>
      </nav>
    );
};

export default Navbar
  