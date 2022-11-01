import { NavLink } from "react-router-dom";

function NavbarButton({ img }) {
  return (
    <NavLink className="flex items-center justify-center w-9 h-9 bg-white rounded-full relative">
      <img src={img} alt="shopping bag" />
      <span className="absolute w-5 h-5 flex items-center justify-center font-semibold shadow-md rounded-full -top-1 -right-3 bg-purple-900 text-xs text-white">
        1
      </span>
    </NavLink>
  );
}
export default NavbarButton;
