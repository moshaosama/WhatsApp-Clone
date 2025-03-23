import { BsChatSquareTextFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoHelpCircle, IoLogOutOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { TbSquareRoundedLetterSFilled } from "react-icons/tb";

export const ProfileList = [
  {
    id: 1,
    Icon: <MdAccountCircle />,
    Name: "Account",
  },
  {
    id: 2,
    Icon: <FaLock />,
    Name: "Privacy",
  },
  {
    id: 3,
    Icon: <BsChatSquareTextFill />,
    Name: "Chats",
  },
  {
    id: 4,
    Icon: <IoIosNotifications />,
    Name: "Notifications",
  },
  {
    id: 5,
    Icon: <TbSquareRoundedLetterSFilled />,
    Name: "Keyboard shortcuts",
  },
  {
    id: 6,
    Icon: <IoHelpCircle />,
    Name: "Help",
  },
];
