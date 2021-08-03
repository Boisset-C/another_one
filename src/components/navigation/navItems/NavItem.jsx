import "./NavItem.scss";

export function NavItem(props) {
  return (
    <a className="item" href={"/"}>
      {props.value}
    </a>
  );
}
