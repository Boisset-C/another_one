import "./guestListCardStyles.scss";
import LeftImage from "../../../../assets/card-images/left.png";
import { useWindowSize } from "../../../../hooks/useWindowSize";

export function CardLeft(props) {
  const { isMobile } = useWindowSize();
  return (
    <section className="wrapper">
      {isMobile ? <p className="position">{props.position}</p> : null}
      <img src={LeftImage} alt="speaker" />

      <div className="text-wrap">
        {isMobile ? null : <p className="position">{props.position}</p>}
        <p className="name">{props.name}</p>
        <p className="bio">{props.bio}</p>
      </div>
    </section>
  );
}
