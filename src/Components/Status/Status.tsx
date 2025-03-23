import { CgDetailsMore } from "react-icons/cg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";

const Status = () => {
  return (
    <div className="w-96 p-3">
      <div className="flex justify-between items-center">
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
            <div className="absolute bottom-0 right-0 bg-[#4FCE5D] rounded-full border-[2px] border-solid border-white">
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
            <div className=" px-1 cursor-pointer hover:bg-[#ddd] transition-all duration-300">
              <hr className="border-gray-200" />
              <div className="mt-2 flex items-center gap-5">
                <img
                  src="/WhatsApp Image 2024-10-20 at 21.44.22_3cca6ed1.jpg"
                  alt="Person.png"
                  loading="lazy"
                  decoding="async"
                  className="object-cover w-12 h-12 rounded-full border-[4px] border-solid border-[#4FCE5D]"
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
