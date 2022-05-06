import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__imageContainer" />
      <div className="hero__cta">
        <div className="hero__ctaHeader crimson-title">Patio Furniture</div>
        <button className="button hero__ctaButton">SHOP</button>
      </div>
    </div>
  );
};

export default Hero;
