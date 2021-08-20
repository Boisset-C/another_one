import "./eventBroadcast.scss";

export function EventBroadcast() {
  return (
    <section>
      <h5>Live Broadcast will begin at 12:00pm PT </h5>

      <div className="broadcast-wrapper">
        <iframe
          title="Veteran Interview BroadCast"
          src="https://vimeo.com/event/2351/embed"
          width="1280"
          height="500"
          frameBorder="0"
          allow="autoplay;fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
