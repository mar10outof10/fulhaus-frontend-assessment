import "./PageContainer.scss";
import Hero from "./Hero.js";
import ProductGrid from "./ProductGrid.js";

const PageContainer = () => {
  return (
    <div className="pageContainer">
      <div className="pageContainer__contentContainer">
        <Hero />
        <ProductGrid />
      </div>
    </div>
  );
};

export default PageContainer;
