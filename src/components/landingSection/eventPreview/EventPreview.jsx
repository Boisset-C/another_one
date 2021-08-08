import "./eventPreview.scss";

export function EventPreview(props) {
  return (
    <section class="event-preview">
      <video width="740" height="430" controls>
        <source src="movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>

      <div class="event-text-wrapper">
        <p class="event-text">{props.description}</p>

        <button class="register-btn">Register Now</button>
      </div>
    </section>
  );
}
