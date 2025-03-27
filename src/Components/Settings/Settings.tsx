import { useMemo } from "react";
import HeaderPage from "../Atoms/HeaderPage";
import InputForm from "../Atoms/InputForm";
import { IoLogOutOutline } from "react-icons/io5";
import { SettingsList } from "./SettingsList";
import { SettingType } from "../../Types/Settings/SettingType";
import { Link, Links } from "react-router";
import useProfile from "../../Hooks/useProfile";

const Settings = () => {
  const { dataUser } = useProfile();
  const ProfileListRender = useMemo(() => {
    return SettingsList.map((el: SettingType) => {
      return (
        <div className="hover:bg-gray-200 transition-all duration-200 px-2 py-5 text-gray-500 flex items-center gap-2 text-xl cursor-pointer">
          {el.Icon}
          <h1>{el.Name}</h1>
        </div>
      );
    });
  }, []);
  return (
    <div className="w-96 ">
      <HeaderPage
        Title="Settings"
        ActiveIconAdd={false}
        ActiveIconDetails={false}
      />
      {/* /////////////////////////////////////// */}

      <InputForm />
      <Link to={"/chats/profile"}>
        <div className="mt-5 hover:bg-gray-200 cursor-pointer transition-all duration-200 flex items-center gap-5">
          <img
            src="/WhatsApp Image 2024-10-20 at 21.44.22_3cca6ed1.jpg"
            alt="Profile.png"
            loading="lazy"
            decoding="async"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="text-sm">
            <h1 className="font-semibold">
              {dataUser?.userName ? dataUser?.userName : "No Name"}
            </h1>
            <p className="text-gray-500">
              {dataUser?.About ? dataUser?.About : "No About"}
            </p>
          </div>
        </div>
      </Link>
      <div className="mt-4">
        {ProfileListRender}
        <Link to={"/account"}>
          <div className="hover:bg-gray-200 transition-all duration-200  px-2 py-5 text-red-500 flex items-center gap-2 text-xl cursor-pointer">
            <IoLogOutOutline />
            <h1>Log out</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Settings;
