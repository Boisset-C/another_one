import nextEvent from "../../../assets/nextEvent.png";
import "./nextEvent.scss";

export function NextEvent(props) {
  return (
    <div>
      <h2 className="next-event-title">{props.title}</h2>

      <article className="next-event">
        <div>
          <h4 className="">{props.subtitle}</h4>

          <div className="date-text-wrapper">
            <div className="event-date">
              <span className="event-day">{props.day}</span>

              <div className="span-group">
                <time dateTime="2008-02-14 20:00">{props.time}</time>
                <small className="am">{props.AMorPM}</small>
                <span>{props.timeType}</span>
              </div>
            </div>

            <p className="summary-wrapper">{props.description}</p>
          </div>
        </div>

        <figure className="image-wrapper">
          <img
            src={nextEvent}
            alt="two people sitting
          at table"
          />
        </figure>
      </article>
    </div>
  );
}
