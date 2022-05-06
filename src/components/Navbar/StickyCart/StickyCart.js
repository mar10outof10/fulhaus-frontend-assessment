import "./StickyCart.scss";
import StickyCartItem from "./StickyCartItem.js";

const StickyCart = ( {cartActive} ) => {
  let cartClassName = `stickyCart${cartActive ? ' stickyCart__active' : ' stickyCart__inactive'}`

  return (
    <div className={cartClassName}>
      <div className="stickyCart__items">
        <StickyCartItem />
        <StickyCartItem />
      </div>
      <div className="stickyCart__checkoutInfo">
        <div className="stickyCart__total">Total:<span className="stickyCart__price">$1800</span></div>
        <button className="button stickyCart__checkout">CHECKOUT</button>
      </div>
    </div>
  );
};

export default StickyCart;
