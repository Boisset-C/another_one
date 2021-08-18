import "./upcomingCard.scss";

export function UpcomingCard(props) {
  return (
    <div className="card-container">
      <h4 className="title">{props.eventsTitle}</h4>
      <p className="description">{props.description}</p>
      <time>{props.date}</time>
    </div>
  );
}
