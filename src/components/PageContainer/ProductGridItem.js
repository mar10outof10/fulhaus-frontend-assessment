import "./ProductGridItem.scss";
import itemPicture from "../../assets/images/productGrid__itemPicture.png"

const ProductGridItem = () => {
  return (
    <div className="productGridItem">
      <img className="productGridItem__image" src={itemPicture} alt="product item picture" />
      <div className="productGridItem__overlay">
        <div className="productGridItem__overlayUpperSection">
          <div className="productGridItem__productName crimson-xLarge">Product Name</div>
          <div className="productGridItem__brandName crimson-body">BRAND NAME</div>
        </div>
        <div className="productGridItem__overlayLowerSection">
          <button className="productGridItem__addToCart crimson-medium">+ Add to Cart</button>
          <div className="productGridItem__price crimson-large">$900</div>
        </div>
      </div>
    </div>
  );
};

export default ProductGridItem;
