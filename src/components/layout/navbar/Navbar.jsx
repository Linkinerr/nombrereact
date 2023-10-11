import { BsFillCartPlusFill } from "react-icons/bs";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <>
      <div className="flex-container">
        <Link to="/">
          <h4 className="li">Inicio</h4>
        </Link>
        <ul className="ul">
          <Link to="/">
            <li className="li">Todo</li>
          </Link>
          <Link to="/category/Agua">
            <li className="li">Bidonde20</li>
          </Link>
          <Link to="/category/Productos">
            <li className="li">Bidonde10</li>
          </Link>
        </ul>
        <Link to="/cart">
          <BsFillCartPlusFill className="cart" />
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
