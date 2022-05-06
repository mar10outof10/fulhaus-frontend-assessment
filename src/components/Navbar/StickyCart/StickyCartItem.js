import "./StickyCartItem.scss";
import itemPicture from "assets/images/productGrid__itemPicture.png"
import closeIcon from "assets/images/closeIcon.svg"


const StickyCartItem = () => {
  return (
    <div className="stickyCartItem">
      <div className="stickyCartItem__imageContainer">
        <img className="stickyCartItem__image" src={itemPicture} alt="product item picture" />
      </div>
      <div className="stickyCartItem__textContainer">
        <div className="stickyCartItem__productName">Product Name</div>
        <div className="stickyCartItem__brandName crimson-small">BRAND NAME</div>
        <div className="stickyCartItem__price crimson-small">$900</div>
      </div>
      <button className="stickyCartItem__closeButton">
        <img className="stickyCartItem__closeButtonIcon" src={closeIcon} alt="X"/>
      </button>
    </div>
  );
};

export default StickyCartItem;
