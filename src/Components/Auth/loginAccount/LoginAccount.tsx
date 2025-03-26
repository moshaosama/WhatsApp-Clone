import { FaArrowDownLong, FaLock } from "react-icons/fa6";
import { IoLogoWhatsapp, IoMdArrowDropright } from "react-icons/io";

const LoginAccount = () => {
  return (
    <div>
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
      <div className="flex justify-center my-40  h-[90.4vh]">
        <div className="flex flex-col">
          <div className="bg-white h-fit p-10 rounded-2xl border-[2px] flex items-center">
            <div>
              <h1 className="text-2xl font-semibold">Log into WhatsApp Web</h1>
              <p className="my-2">
                Message privately with friends and family using WhatsApp on your
                browser.
              </p>
              <div className="my-3">
                <li>Open WhatsApp on your phone </li>
                <li>Tap on Android, or Settings on iPhone</li>
                <li>Tap Linked devices and then Link a device </li>
                <li>Point your phone at this screen to scan the QR code </li>
              </div>
              <div className="my-10 flex flex-col gap-3">
                <div className="w-fit cursor-pointer">
                  <h1 className="flex items-center gap-1 hover:text-[#25d366]">
                    you don't have any account in WhatsApp{" "}
                    <IoMdArrowDropright />
                  </h1>
                  <hr className="w-72 h-0.5 border-none bg-[#25d366]" />
                </div>
                <div className="w-fit cursor-pointer">
                  <h1 className="flex items-center gap-1 hover:text-[#25d366]">
                    Log in with phone number <IoMdArrowDropright />
                  </h1>
                  <hr className="w-48 h-0.5 border-none bg-[#25d366]" />
                </div>
              </div>
            </div>
            <div>
              <img
                src="/download-removebg-preview (1).png"
                alt="QR_Code"
                loading="lazy"
                fetchPriority="high"
                decoding="async"
                className="w-80"
              />
            </div>
          </div>
          <div className=" my-4 text-gray-500">
            <p className=" flex items-center justify-center gap-3">
              <FaLock className="text-sm" />
              Your personal messages are end-to-end encrypted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAccount;
