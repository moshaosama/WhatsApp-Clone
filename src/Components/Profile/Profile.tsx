import { MdModeEditOutline } from "react-icons/md";
import HeaderPage from "../Atoms/HeaderPage";
import { memo } from "react";
import { DetailsProfileProps } from "../../Types/Profile/Profile";
import useProfile from "../../Hooks/useProfile";

const Profile = () => {
  const { dataUser } = useProfile();

  return (
    <div className="w-96 ">
      <HeaderPage
        Title={"Profile"}
        ActiveIconAdd={false}
        ActiveIconDetails={false}
      />
      <div className="mt-7 flex justify-center">
        <div className="relative">
          <img
            src="/WhatsApp Image 2024-10-20 at 21.44.22_3cca6ed1.jpg"
            alt="Profile.png"
            loading="lazy"
            decoding="async"
            className="w-40 h-40 rounded-full object-cover cursor-pointer"
          />
          <div className="absolute flex justify-center items-center top-0 w-40 h-40 rounded-full hover:bg-[#7171719c] cursor-pointer transition-all duration-300"></div>
        </div>
      </div>

      <DetailsProfile
        Title="Your name"
        Text={dataUser?.userName ? dataUser?.userName : "No Name"}
      />

      <p className="mt-7 text-gray-500 mx-5">
        This is not your username or PIN. This name will be visible to your
        WhatsApp contacts.
      </p>

      <DetailsProfile
        Title="About"
        Text={dataUser?.About ? dataUser?.About : "No About"}
      />
    </div>
  );
};

export default Profile;

const DetailsProfile = memo(({ Title, Text }: DetailsProfileProps) => {
  return (
    <div className="mt-10 bg-gray-100 flex flex-col justify-between h-24 p-3">
      <h1 className="text-[#008069]">{Title}</h1>
      <div className="flex items-center justify-between">
        <h1>{Text}</h1>
        <MdModeEditOutline className="text-gray-400 text-2xl cursor-pointer" />
      </div>
    </div>
  );
});
