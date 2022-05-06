import "./ProductGrid.scss";
import ProductGridItem from "./ProductGridItem.js";

const ProductGrid = () => {
  const product = {
    "productName": "Product Name",
    "brandName": "BRAND NAME",
    "price": 900,
  }
  return (
    <div className="productGrid">
      <div className="productGrid__list">
        <ProductGridItem product={product} />
        <ProductGridItem product={product} />
        <ProductGridItem product={product} />
        <ProductGridItem product={product} />
        <ProductGridItem product={product} />
        <ProductGridItem product={product} />
      </div>
    </div>
  );
};

export default ProductGrid;
