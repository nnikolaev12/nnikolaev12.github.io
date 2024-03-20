import { Link } from "react-router-dom";
import INavLinkProps from "./INavLinkProps";

export const NavLink = (props: INavLinkProps) => {
  const { title, to, hash } = props;

  return <Link to={{ pathname: to, hash: hash }}>{title}</Link>;
};
