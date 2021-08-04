import heroImage from "../../../assets/heroImage.png";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { DesktopNav } from "../../navigation/desktopNav/DesktopNav";
import { MobileNav } from "../../navigation/mobileNav/MobileNav";

import "./hero.scss";

export function Hero() {
  const { isMobile } = useWindowSize();
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {isMobile ? null : <DesktopNav />}
      {isMobile ? <MobileNav /> : null}
    </div>
  );
}
