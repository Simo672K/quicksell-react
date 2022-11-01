import { NavLink } from "react-router-dom";

function NavbarLink({ children }) {
  return <NavLink className="text-white font-semibold">{children}</NavLink>;
}
export default NavbarLink;
