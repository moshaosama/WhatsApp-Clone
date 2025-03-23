import { NavbarIcons } from "../Components";
import ChatsNumber from "../Components/ChatsNumber/ChatsNumber";

const Chats = () => {
  return (
    <div className="bg-[#1DAA61] flex justify-center h-40 w-full">
      <div className="bg-white m-10 absolute flex gap-2">
        <NavbarIcons />
        <ChatsNumber />
      </div>
    </div>
  );
};

export default Chats;
