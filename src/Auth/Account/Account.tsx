import { FaLock } from "react-icons/fa6";

import LinksAccount from "../Components/LinksAccount";
import { Link } from "react-router";

const AccountComponent = () => {
  return (
    <div>
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
                <Link to={"/account/signup"}>
                  <LinksAccount Title="you don't have any account in WhatsApp" />
                </Link>
                <Link to={"/account/signup"}>
                  <LinksAccount Title="Log in with phone number" />
                </Link>
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

export default AccountComponent;
