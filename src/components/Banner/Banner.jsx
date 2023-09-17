import "./Banner.css";

const Banner = ({ bannerImage, bannerAlt }) => {
  return (
    <div>
      <img src={bannerImage} alt={bannerAlt} className="banner" />
      <h3 className="texto">Pruebassss</h3>
    </div>
  );
};

export default Banner;
