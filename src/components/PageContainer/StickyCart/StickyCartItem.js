import './StickyCartItem.scss';

const StickyCartItem = () => {
  return (
    <div className="stickyCartItem">
      <div className="stickyCartItem__imageContainer">
        <img className="stickyCartItem__image" />
      </div>
      <div className="stickyCartItem__textContainer">
        <div className="stickyCartItem__productName"></div>
        <div className="stickyCartItem__brandName"></div>
        <div className="stickyCartItem__price"></div>
      </div>
      <button className="stickyCartItem__closeButton"></button>
    </div>
  );
}

export default StickyCartItem;
