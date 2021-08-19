import "./guestListCardStyles.scss";
import RightImage from "../../../../assets/card-images/right.png";
import { useWindowSize } from "../../../../hooks/useWindowSize";

export function CardRight(props) {
  const { isMobile } = useWindowSize();
  return (
    <section className="wrapper">
      {isMobile ? <p className="position">{props.position}</p> : null}
      <img src={RightImage} alt="speaker" />

      <div className="text-wrap">
        {isMobile ? null : <p className="position">{props.position}</p>}
        <p className="name">{props.name}</p>
        <p className="bio">{props.bio}</p>
      </div>
    </section>
  );
}
