import "./mobileSideBar.scss";
import MobileLogo from "../../icons/MobileLogo";

export function MobileSideBar() {
  return (
    <section>
      <MobileLogo />
      <nav>
        <ul className="sidebar-nav">
          <li className="sidebar-link">
            <NavLink to="/landing">
              <DesktopLogo />
            </NavLink>
          </li>
          <li className="sidebar-link">
            <NavLink activeClassName="sidebar-active-link" to="/landing">
              Home
            </NavLink>
          </li>
          <li className="sidebar-link">
            <NavLink activeClassName="sidebar-active-link" to="/events">
              <span>Live Events</span>
            </NavLink>
          </li>
          <li className="sidebar-link">
            <NavLink activeClassName="sidebar-active-link" to="/archive">
              Replays
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}
