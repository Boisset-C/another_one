import "./archiveCardEvent.scss";

export function ArchiveCardEvent(props) {
  return (
    <div className="archive-replay-card-section">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <div dangerouslySetInnerHTML={props.iframe}></div>
    </div>
  );
}
