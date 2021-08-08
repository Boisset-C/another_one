import "./beneathHero.scss";
import foldImage from "../../../assets/fold_image.png";

export function BeneathHero(props) {
  return (
    <div className="beneath-container">
      <div className="text-wrapper">
        <h2 className="text-fold1">{props.subtitle}</h2>
        <p className="text-fold2">{props.description}</p>
      </div>

      <div className="fold-image">
        <img src={foldImage} alt="soldier and his family" />
      </div>
    </div>
  );
}
