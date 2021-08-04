import { MobileLogo } from "../../icons/MobileLogo";
import { Burger } from "../../icons/Burger";
import "./mobileNav.scss";

export function MobileNav() {
  return (
    <div className="mobile-container">
      <a href="/">
        <MobileLogo />
      </a>

      <button>
        <Burger />
      </button>
    </div>
  );
}
