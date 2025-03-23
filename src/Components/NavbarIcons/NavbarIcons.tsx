import { useMemo } from "react";
import { NavbarIconsList } from "./NavbarIconsList";
import { NavbarIconType } from "../../Types/NavbarIcon/NavbarIcon";
import { NavLink } from "react-router";

const NavbarIcons = () => {
  const navbarIconList = useMemo(() => {
    return NavbarIconsList?.map((el: NavbarIconType) => {
      return (
        <NavLink to={el.To} key={el.id} title={el.Title}>
          {el.Icon}
        </NavLink>
      );
    });
  }, []);
  return (
    <div className="flex flex-col gap-3 bg-[#d5d5d5] border-r-[1px] border-[#00000040] h-[50pc] p-4">
      {navbarIconList}
    </div>
  );
};

export default NavbarIcons;
