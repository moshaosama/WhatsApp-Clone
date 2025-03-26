import { FaArrowDownLong } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { Outlet } from "react-router";

const Account = () => {
  return (
    <div className="bg-[#fcf5eb]">
      <div className="p-4 flex justify-between">
        <div className="text-[#25d366] flex items-center gap-3">
          <IoLogoWhatsapp className=" text-4xl" />
          <h1 className="text-xl font-bold">WhatsApp</h1>
        </div>
        <div>
          <button className="flex items-center bg-[#25d366] px-5 py-3 border-[2px] rounded-full">
            Download <FaArrowDownLong />
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Account;
