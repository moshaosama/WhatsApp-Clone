import { useMemo } from "react";
import { NavbarIconsList } from "./NavbarIconsList";
import { NavbarIconType } from "../../Types/NavbarIcon/NavbarIcon";
import { NavLink } from "react-router";
import Tippy from "@tippyjs/react";
import { IoMdSettings } from "react-icons/io";
import style from "./NavbarIcon.module.css";
import useProfile from "../../Hooks/useProfile";
import { NoImage } from "../../Utils/Images";

const NavbarIcons = () => {
  const { Icon } = style;
  const { dataUser } = useProfile();
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
              src={dataUser?.Image ? dataUser?.Image : NoImage}
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
