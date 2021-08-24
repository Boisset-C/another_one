import "./archiveBroadcast.scss";

export function ArchiveBroadcast(props) {
  return (
    <section>
      <h5 className="archive-replay">Most recent event replay</h5>
      <div className="archive-stream-wrapper">
        <iframe
          className="archive-iframe-responsive"
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
