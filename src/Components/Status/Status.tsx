import { CgDetailsMore } from "react-icons/cg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import style from "./Status.module.css";

const Status = () => {
  const { addIcon, Status, StatusImage } = style;
  return (
    <div className="w-96">
      <div className="flex p-3 justify-between items-center">
        <h1 className="font-bold text-xl">Status</h1>
        <div className="flex items-center gap-5">
          <IoMdAddCircleOutline className="text-xl text-gray-500 cursor-pointer" />
          <CgDetailsMore className="text-xl text-gray-500 cursor-pointer" />
        </div>
      </div>
      <div className=" overflow-y-scroll h-[46.7pc]">
        <div className="mt-7 flex items-center gap-5">
          <div className="relative w-fit">
            <img
              src="/WhatsApp Image 2024-10-20 at 21.44.22_3cca6ed1.jpg"
              alt="Person.png"
              loading="lazy"
              decoding="async"
              className="object-cover w-12 h-12 rounded-full"
            />
            <div className={addIcon}>
              <IoAddSharp />
            </div>
          </div>
          <div className="text-gray-500">
            <h1 className="text-md font-semibold">My Status</h1>
            <p className="text-sm">Click to add status update</p>
          </div>
        </div>
        <hr className="bg-gray-300 rounded-full h-2 mt-3 border-none" />

        <div className="mt-4">
          <h1 className="text-[#4FCE5D]">RECENT</h1>
          <div className="mt-3">
            <div className={`${Status} transition-all duration-300`}>
              <hr className="border-gray-200" />
              <div className="mt-2 flex items-center gap-5">
                <img
                  src="/WhatsApp Image 2024-10-20 at 21.44.22_3cca6ed1.jpg"
                  alt="Person.png"
                  loading="lazy"
                  decoding="async"
                  className={`${StatusImage} object-cover`}
                />
                <div className="text-sm">
                  <h1 className="font-semibold">Mo4aFekry</h1>
                  <p className="text-gray-500">Today at 3:50 pm</p>
                </div>
              </div>
            </div>
            {/* //////////////////////////////////////////////////////////// */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
