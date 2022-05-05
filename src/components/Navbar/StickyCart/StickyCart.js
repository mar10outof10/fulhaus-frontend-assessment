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
        <div className="stickyCart__total"></div>
        <button className="stickyCart__button"></button>
      </div>
    </div>
  );
};

export default StickyCart;
