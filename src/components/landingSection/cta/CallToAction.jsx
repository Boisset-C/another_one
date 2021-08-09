import "./callToAction.scss";

export function CallToAction(props) {
  return (
    <section className="cta-wrapper">
      <p className="cta-description">{props.description}</p>
      <button className="register-btn">Register Now</button>
    </section>
  );
}
