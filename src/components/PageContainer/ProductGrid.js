import "./ProductGrid.scss";
import ProductGridItem from "./ProductGridItem.js";
import axios from 'axios';
import React from "react";

const ProductGrid = () => {
  const [products, setProducts] = React.useState([]);

  // returns array of 6 products
  React.useEffect(() => {
    axios.get('https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6')
    .then(res => {
      const resProducts = res.data.data.products;
      setProducts(resProducts.map((prod) => {
        return {
          productName: prod.fulhausProductName,
          retailPrice: prod.retailPrice,
          imageURL: prod.imageURLs[0],
        }
      }))
    }).catch(err => console.log(err));
  }, [])

  const productGridList = products.map((product) => (
      <ProductGridItem
        key={product.id}
        product={product}
      />
  ))

  return (
    <div className="productGrid">
      <ul className="productGrid__list">
        {productGridList}
      </ul>
    </div>
  );
};

export default ProductGrid;
