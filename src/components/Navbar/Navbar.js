import "./Navbar.scss";
import StickyCart from "./StickyCart/StickyCart.js";
import React from "react";

const Navbar = () => {
  const [cartActive, setCartActive] = React.useState(false);

  const toggleCartActive = () => {
    setCartActive(!cartActive);
  }

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__title">Fülhaus Shop</div>
        <button className="button navbar__cartButton" onClick={toggleCartActive}>CART</button>
      </div>
      <StickyCart cartActive={cartActive} />
    </div>
  );
};

export default Navbar;
