import "./StickyCart.scss";
import StickyCartItem from "./StickyCartItem.js";
import { useSelector } from "react-redux";

const StickyCart = ({ cartActive }) => {
  const cartClassName = `stickyCart${
    cartActive ? " stickyCart__active" : " stickyCart__inactive"
  }`;

  const cart = useSelector((state) => state.cart);
  const subtotal = cart.subtotal;

  const CartItems = () =>
    cart.products.map((cartItem) => (
      <StickyCartItem key={cartItem.id} cartItem={cartItem} />
    ));

  return (
    <div className={cartClassName}>
      <div className="stickyCart__items">
        <CartItems />
      </div>
      <div className="stickyCart__checkoutInfo">
        <div className="stickyCart__total montserrat-med">
          Total:<span className="stickyCart__price">${subtotal}</span>
        </div>
        <button className="button stickyCart__checkout">CHECKOUT</button>
      </div>
    </div>
  );
};

export default StickyCart;
