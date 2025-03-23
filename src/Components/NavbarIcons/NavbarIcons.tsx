import { useMemo } from "react";
import { NavbarIconsList } from "./NavbarIconsList";
import { NavbarIconType } from "../../Types/NavbarIcon/NavbarIcon";
import { NavLink } from "react-router";
import Tippy from "@tippyjs/react";

const NavbarIcons = () => {
  const navbarIconList = useMemo(() => {
    return NavbarIconsList?.map((el: NavbarIconType) => {
      return (
        <Tippy
          content={el.Title}
          placement="right"
          className="bg-black text-white px-4 rounded-full"
        >
          <NavLink to={el.To} key={el.id}>
            {el.Icon}
          </NavLink>
        </Tippy>
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
