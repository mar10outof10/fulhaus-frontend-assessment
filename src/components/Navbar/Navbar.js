import "./Navbar.scss";
import StickyCart from "./StickyCart/StickyCart.js";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__title">Fülhaus Shop</div>
        <button className="button navbar__cartButton">CART</button>
      </div>
      <StickyCart />
    </div>
  );
};

export default Navbar;
