import { Outlet, Link } from "react-router-dom";

import "./Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";
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
            <li className="li">Más vendido</li>
          </Link>
          <Link to="/category/Productos">
            <li className="li">Respaldo</li>
          </Link>
          
        </ul>
        <Link to="/cart">
          <CartWidget className="CartWidget" />
        </Link>
        <Outlet />
      </div>

     
    </>
  );
};

export default Navbar;
