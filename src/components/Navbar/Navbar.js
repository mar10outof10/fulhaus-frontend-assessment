import "./Navbar.scss";
import StickyCart from "./StickyCart/StickyCart.js";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__header"></div>
      <button className="navbar__cartButton"></button>
      <StickyCart />
    </div>
  );
};

export default Navbar;
