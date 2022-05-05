import "./ProductGrid.scss";
import ProductGridItem from "./ProductGridItem.js";

const ProductGrid = () => {
  return (
    <div className="productGrid">
      <div className="productGrid__list">
        <ProductGridItem />
        <ProductGridItem />
        <ProductGridItem />
        <ProductGridItem />
        <ProductGridItem />
        <ProductGridItem />
      </div>
    </div>
  );
};

export default ProductGrid;
