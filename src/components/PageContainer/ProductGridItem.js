import "./ProductGridItem.scss";

import { useDispatch } from 'react-redux'
import { addProduct } from 'features/cartSlice'

const ProductGridItem = ({product}) => {  
  const dispatch = useDispatch();

  return (
    <div className="productGridItem">
      <img className="productGridItem__image" src={product.imageURL} alt="product item" />
      <div className="productGridItem__overlay">
        <div className="productGridItem__overlayUpperSection">
          <div className="productGridItem__productName crimson-xLarge">{product.productName}</div>
          <div className="productGridItem__brandName crimson-large">{product.brandName}</div>
        </div>
        <div className="productGridItem__overlayLowerSection">
          <button className="productGridItem__addToCart crimson-medium" onClick={() => dispatch(addProduct(product))}>+ Add to Cart</button>
          <div className="productGridItem__price crimson-large">${product.retailPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductGridItem;
