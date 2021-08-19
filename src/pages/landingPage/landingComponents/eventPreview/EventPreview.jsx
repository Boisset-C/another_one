import "./eventPreview.scss";

export function EventPreview(props) {
  return (
    <section className="event-preview">
      <div className="video-wrapper">
        <video className="preview-video" width="744" height="426" controls>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="event-preview-text-wrapper">
        <h4 className="event-preview-text">{props.description}</h4>

        <button className="event-preview-btn">Register Now</button>
      </div>
    </section>
  );
}
