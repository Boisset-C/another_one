import "./desktopNav.scss";
import { Logo } from "../../icons/Logo";
import { NavItem } from "../navItems/NavItem";

export function DesktopNav() {
  return (
    <nav>
      <ul className="navbar">
        <li className="link">
          <a href="/">
            <Logo />
          </a>
        </li>
        <li className="link">
          <NavItem value={"Home"} />
        </li>
        <li className="link">
          <NavItem value={"Live Events"} />
        </li>
        <li className="link">
          <NavItem value={"Replays"} />
        </li>
      </ul>
    </nav>
  );
}
