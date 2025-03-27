import { MdModeEditOutline } from "react-icons/md";
import HeaderPage from "../Atoms/HeaderPage";
import { useEffect, useRef, useState } from "react";
import useProfile from "../../Hooks/useProfile";
import { HiCheck } from "react-icons/hi";
import HandlingData from "./HandlingData/HandlingData";

const Profile = () => {
  const { dataUser } = useProfile();
  const [inputNameActive, setInputNameActive] = useState(false);
  const [inputAboutActive, setInputAboutActive] = useState(false);
  const inputNameRef = useRef<HTMLInputElement | null>(null);
  const inputAboutRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputNameRef.current?.focus();
    inputAboutRef.current?.focus();
  }, [inputNameActive, inputAboutActive]);

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
            src={
              dataUser?.Image
                ? dataUser?.Image
                : "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg"
            }
            alt="Profile.png"
            loading="lazy"
            decoding="async"
            className="w-40 h-40 rounded-full object-cover cursor-pointer"
          />
          <div className="absolute flex justify-center items-center top-0 w-40 h-40 rounded-full hover:bg-[#7171719c] cursor-pointer transition-all duration-300"></div>
        </div>
      </div>

      <HandlingData
        State={inputNameActive}
        setState={() => setInputNameActive(!inputNameActive)}
        Value={dataUser?.userName ? dataUser?.userName : "No Name"}
        Title={"Name"}
        Text={dataUser?.userName ? dataUser?.userName : "No Name"}
        InputRef={inputNameRef}
      />

      <p className="mt-7 text-gray-500 mx-5">
        This is not your username or PIN. This name will be visible to your
        WhatsApp contacts.
      </p>

      <HandlingData
        State={inputAboutActive}
        setState={() => setInputAboutActive(!inputAboutActive)}
        Value={dataUser?.About ? dataUser?.About : "No About"}
        Title={"About"}
        Text={dataUser?.About ? dataUser?.About : "No About"}
        InputRef={inputAboutRef}
      />
    </div>
  );
};

export default Profile;
