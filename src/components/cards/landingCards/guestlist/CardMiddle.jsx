import "./guestListCardStyles.scss";
import MiddleImage from "../../../../assets/card-images/middle.png";
import { useWindowSize } from "../../../../hooks/useWindowSize";

export function CardMiddle(props) {
  const { isMobile } = useWindowSize();
  return (
    <section className="wrapper">
      {isMobile ? <p className="position">{props.position}</p> : null}
      <img src={MiddleImage} alt="speaker" />

      <div className="text-wrap">
        {isMobile ? null : <p className="position">{props.position}</p>}
        <p className="name">{props.name}</p>
        <p className="bio">{props.bio}</p>
      </div>
    </section>
  );
}
