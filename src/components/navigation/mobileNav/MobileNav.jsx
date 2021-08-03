import { Logo } from "../../icons/Logo";
import { Burger } from "../../icons/Burger";
import "./mobileNav.scss";

export function MobileNav() {
  return (
    <div className="mobile-container">
      <a href="/">
        <Logo />
      </a>

      <button>
        <Burger />
      </button>
    </div>
  );
}
