import "./archiveCardEvent";

export function ArchiveCardEvent(props) {
  return (
    <article>
      <div className="archive-video"></div>
      <div>
        <h4>{props.header}</h4>
        <p>{props.description}</p>
        <h4>Guests:</h4>
        <h4>{props.guestNameOne}</h4>
        <p>{props.guestBioOne}</p>
        <h4>{props.guestNameTwo}</h4>
        <p>{props.guestBioTwo}</p>
      </div>
    </article>
  );
}
