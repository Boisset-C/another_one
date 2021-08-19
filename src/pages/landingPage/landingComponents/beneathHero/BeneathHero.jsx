import "./beneathHero.scss";
import FoldImage from "../../../../assets/fold-image.png";
import { useWindowSize } from "../../../../hooks/useWindowSize";

export function BeneathHero(props) {
  const { isMobile } = useWindowSize();
  return (
    <div className="beneath-container">
      <div className="text-wrapper">
        <h2 className="text-fold1">{props.subtitle}</h2>
        {isMobile ? null : <p className="text-fold2">{props.description}</p>}
      </div>

      <figure className="fold-image">
        <img src={FoldImage} alt="soldier and his family" />
      </figure>

      {isMobile ? <p className="text-fold2">{props.description}</p> : null}
    </div>
  );
}
