import { Outlet } from "react-router";
import { NavbarIcons } from "../Components";

const Chats = () => {
  return (
    <div className="bg-[#1DAA61] flex justify-center h-40 w-full">
      <div className="bg-white m-10 absolute flex gap-2">
        <NavbarIcons />
        <Outlet />
      </div>
    </div>
  );
};

export default Chats;
