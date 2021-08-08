import { NavLink } from "react-router-dom";
import { DesktopLogo } from "../../icons/DesktopLogo";
import "./desktopNav.scss";

export function DesktopNav() {
  return (
    <div className="nav-container">
      <nav>
        <ul className="navbar">
          <li className="link">
            <NavLink activeClassName="active-link" to="/">
              <DesktopLogo />
            </NavLink>
          </li>
          <li className="link">
            <NavLink activeClassName="active-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="link">
            <NavLink activeClassName="active-link" to="/events">
              <span>Live Events</span>
            </NavLink>
          </li>
          <li className="link">
            <NavLink activeClassName="active-link" to="/archive">
              Replays
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
