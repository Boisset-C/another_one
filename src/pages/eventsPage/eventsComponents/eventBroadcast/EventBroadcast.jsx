import "./eventBroadcast.scss";

export function EventBroadcast(props) {
  return (
    <section>
      <h5 className="event-start-time">{props.announcement}</h5>
      <div className="live-stream-wrapper">
        <iframe
          className="iframe-responsive"
          title="Veteran Interview BroadCast"
          src="https://vimeo.com/event/2351/embed"
          frameBorder="0"
          allow="autoplay;fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
