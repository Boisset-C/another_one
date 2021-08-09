import "./eventPreview.scss";

export function EventPreview(props) {
  return (
    <section className="event-preview">
      <video width="744" height="426" controls>
        <source src="movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>

      <div className="event-text-wrapper">
        <p className="event-text">{props.description}</p>

        <button className="register-btn">Register Now</button>
      </div>
    </section>
  );
}
