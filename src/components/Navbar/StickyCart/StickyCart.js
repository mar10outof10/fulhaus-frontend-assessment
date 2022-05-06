import "./StickyCart.scss";
import StickyCartItem from "./StickyCartItem.js";

const StickyCart = () => {
  return (
    <div className="stickyCart">
      <div className="stickyCart__items">
        <StickyCartItem />
        <StickyCartItem />
      </div>
      <div className="stickyCart__contentBox">
        <div className="stickyCart__total">Total:<span className="stickyCart__price">$1800</span></div>
        <button className="stickyCart__button">CHECKOUT</button>
      </div>
    </div>
  );
};

export default StickyCart;
