import heroImage from "../../../assets/heroImage.png";
import { MobileNav } from "../../navigation/mobileNav/MobileNav";
import "./hero.scss";

export function Hero() {
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <MobileNav />
    </div>
  );
}
