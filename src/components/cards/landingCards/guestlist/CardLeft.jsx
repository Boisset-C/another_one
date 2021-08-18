import "./guestListCardStyles.scss";
import LeftImage from "../../../../assets/card-images/left.png";

export function CardLeft(props) {
  return (
    <section className="wrapper">
      <img src={LeftImage} alt="speaker" />
      <p className="position">{props.position}</p>

      <div className="text-wrap">
        <p className="name">{props.name}</p>
        <p className="bio">{props.bio}</p>
      </div>
    </section>
  );
}
