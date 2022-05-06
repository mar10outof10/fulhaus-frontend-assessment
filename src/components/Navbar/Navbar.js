import "./Navbar.scss";
import StickyCart from "./StickyCart/StickyCart.js";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__header">Fülhaus Shop</div>
      <button className="navbar__cartButton">CART</button>
      <StickyCart />
    </div>
  );
};

export default Navbar;
