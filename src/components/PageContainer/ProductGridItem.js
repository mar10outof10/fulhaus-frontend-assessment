import "./ProductGridItem.scss";

const ProductGridItem = () => {
  return (
    <div className="productGridItem">
      <div className="productGridItem__container--active">
        <div className="productGridItem__overlay">
          <div className="productGridItem__overlayUpperSection">
            <div className="productGridItem__productName"></div>
            <div className="productGridItem__brandName"></div>
          </div>
          <div className="productGridItem__overlayLowerSection">
            <button className="productGridItem__addToCart"></button>
            <div className="productGridItem__price"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGridItem;
