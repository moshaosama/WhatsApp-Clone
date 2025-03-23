import { useMemo } from "react";
import { NavbarIconsList } from "./NavbarIconsList";
import { NavbarIconType } from "../../Types/NavbarIcon/NavbarIcon";
import { NavLink } from "react-router";
import Tippy from "@tippyjs/react";
import { IoMdSettings } from "react-icons/io";
import style from "./NavbarIcon.module.css";

const NavbarIcons = () => {
  const { Icon } = style;
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
    <div className="flex flex-col justify-between items-center bg-[#d5d5d5] border-r-[1px] border-[#00000040] h-[50pc] p-4">
      <div className="flex flex-col gap-3">{navbarIconList}</div>
      <div className="flex flex-col gap-5 items-center">
        <NavLink to={"/chats/setting"}>
          <IoMdSettings className={Icon} />
        </NavLink>
        <NavLink to={"/chats/profile"}>
          <div className="cursor-pointer">
            <img
              src="/WhatsApp Image 2024-10-20 at 21.44.22_3cca6ed1.jpg"
              alt="Profile.png"
              loading="lazy"
              decoding="async"
              className="object-cover w-10 h-10 rounded-full"
            />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarIcons;
