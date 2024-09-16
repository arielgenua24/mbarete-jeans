import useRefs from "../../hooks/useRefs";

// eslint-disable-next-line react/prop-types
const Navbar = (onNavigate) => {
  
    return (
      <nav>
        <ul>
          <li> back </li>
          <li><a onClick={() => onNavigate('jeans')}>Jeans</a></li>
          <li><a onClick={() => onNavigate('latest')}>Últimos en stock</a></li>
        </ul>
      </nav>
    );
};

export default Navbar
  