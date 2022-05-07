import "./StickyCartItem.scss";
import closeIcon from "assets/images/closeIcon.svg"
import { useDispatch } from 'react-redux'
import { removeProduct } from 'features/cartSlice'


const StickyCartItem = ({cartItem}) => {
  const dispatch = useDispatch();

  return (
    <div className="stickyCartItem">
      <div className="stickyCartItem__imageContainer">
        <img className="stickyCartItem__image" src={cartItem.imageURL} alt="product item" />
      </div>
      <div className="stickyCartItem__textContainer">
        <div className="stickyCartItem__productName">{cartItem.productName}</div>
        <div className="stickyCartItem__brandName crimson-small">{cartItem.brandName}</div>
        <div className="stickyCartItem__price crimson-small">${cartItem.retailPrice}</div>
      </div>
      <button className="stickyCartItem__closeButton" onClick={() => dispatch(removeProduct(cartItem))}>
        <img className="stickyCartItem__closeButtonIcon" src={closeIcon} alt="X"/>
      </button>
    </div>
  );
};

export default StickyCartItem;
