import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/ropa">Ropa</Link>
        </li>
        <li>
          <Link to="/nosotros">Nosotros</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
