import heroImage from "../../../assets/hero-image.png";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { DesktopNav } from "../../navigation/desktopNav/DesktopNav";
import { MobileNav } from "../../navigation/mobileNav/MobileNav";
import "./hero.scss";

export function Hero(props) {
  const { isMobile } = useWindowSize();
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {isMobile ? null : <DesktopNav />}
      {isMobile ? <MobileNav /> : null}

      <h1>{props.name}</h1>
      <h1>{props.subtitle}</h1>
      <p>{props.description}</p>
      <div className="button-wrapper">
        <button className="register-btn">Register Now</button>
      </div>
    </div>
  );
}
