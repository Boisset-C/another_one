import "./guestListCardStyles.scss";
import MiddleImage from "../../../../assets/card-images/middle.png";

export function CardMiddle(props) {
  return (
    <section className="wrapper">
      <img src={MiddleImage} alt="speaker" />
      <p className="position">{props.position}</p>

      <div className="text-wrap">
        <p className="name">{props.name}</p>
        <p className="bio">{props.bio}</p>
      </div>
    </section>
  );
}
