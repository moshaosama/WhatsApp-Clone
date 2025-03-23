import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { BsChatSquareFill } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { MdOutlineGroups2 } from "react-icons/md";
import style from "./NavbarIcon.module.css";
const { Icon } = style;

export const NavbarIconsList = [
  {
    id: 1,
    Title: "Chat",
    Icon: <BsChatSquareFill className={Icon} />,
  },
  {
    id: 2,
    Title: "Status",
    Icon: <HiOutlineStatusOnline className={Icon} />,
  },
  {
    id: 3,
    Title: "Channels",
    Icon: <BiSolidMessageRoundedDetail className={Icon} />,
  },
  {
    id: 4,
    Title: "Communities",
    Icon: <MdOutlineGroups2 className={Icon} />,
  },
  {
    id: 5,
    Title: "Meta Ai",
    Icon: <FaRobot className={Icon} />,
  },
];
