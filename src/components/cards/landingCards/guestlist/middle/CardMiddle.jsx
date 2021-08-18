import "./cardMiddle.scss";
import MiddleImage from "../../../../../assets/card-images/middle.png";

export function CardMiddle(props) {
  return (
    <section className="wrapper">
      <img src={MiddleImage} alt="speaker" />

      <div className="text-wrap">
        <p className="position">{props.position}</p>
        <p className="name">{props.name}</p>
        <p className="bio">{props.bio}</p>
      </div>
    </section>
  );
}
