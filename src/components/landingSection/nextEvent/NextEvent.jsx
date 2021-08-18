import "./nextEvent.scss";
import NextEventImage from "../../../assets/NextEventImage.png";

export function NextEvent(props) {
  return (
    <div className="next-event-wrapper">
      <h2 className="next-event-title">{props.title}</h2>

      <h4 className="next-event-subheader">{props.subtitle}</h4>
      {/* image-summary wrapper groups image and text together */}
      <div className="image-summary-wrapper">
        <div className="text-wrapper">
          <span className="event-day">{props.day}</span>

          <time dateTime="2008-02-14 20:00">{props.time}</time>
          <small className="am">{props.AMorPM}</small>
          <span>{props.timeType}</span>

          <p className="summary">{props.description}</p>
        </div>

        <figure className="image-wrapper">
          <img src={NextEventImage} alt="person sitting at laptop" />
        </figure>
      </div>
    </div>
  );
}
