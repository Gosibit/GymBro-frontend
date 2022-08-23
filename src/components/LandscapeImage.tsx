import "../styles/LandscapeImage/LandscapeImage.css";
import sunglassesLandscape from "../files/sunglasses-landscape.png";

function LandscapeImage(landscapeImage: any) {
  return (
    <div className="landscape-image">
      <img
        src={sunglassesLandscape}
        className="landscape-image__image"
        alt="landscape image"
      />
    </div>
  );
}
export default LandscapeImage;
