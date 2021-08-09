import "./cardRight.scss";
import RightImage from "../../../assets/card-images/right.png";

export function CardRight(props) {
  return (
    <section className="wrapper">
      <img src={RightImage} alt="speaker" />

      <div className="text-wrap">
        <p className="position">{props.position}</p>
        <p className="name">{props.name}</p>
        <p className="bio">{props.bio}</p>
      </div>
    </section>
  );
}
