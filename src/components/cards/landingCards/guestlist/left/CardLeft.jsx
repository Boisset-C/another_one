import "./cardLeft.scss";
import LeftImage from "../../../../../assets/card-images/left.png";

export function CardLeft(props) {
  return (
    <section className="wrapper">
      <img src={LeftImage} alt="speaker" />

      <div className="text-wrap">
        <p className="position">{props.position}</p>
        <p className="name">{props.name}</p>
        <p className="bio">{props.bio}</p>
      </div>
    </section>
  );
}
