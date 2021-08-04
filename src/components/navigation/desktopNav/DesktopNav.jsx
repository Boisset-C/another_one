import "./desktopNav.scss";
import { DesktopLogo } from "../../icons/DesktopLogo";
import { NavItem } from "../navItems/NavItem";

export function DesktopNav() {
  return (
    <div className="nav-container">
      <nav>
        <ul className="navbar">
          <li className="link">
            <a href="/">
              <DesktopLogo />
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
    </div>
  );
}
