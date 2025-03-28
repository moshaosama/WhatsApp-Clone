import HeaderPage from "../Atoms/HeaderPage";
import { useEffect, useRef, useState } from "react";
import useProfile from "../../Hooks/useProfile";
import HandlingData from "./HandlingData/HandlingData";
import { NoImage } from "../../Utils/Images";
import { FaCamera, FaRegEye } from "react-icons/fa";
import { MdDriveFolderUpload } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";

const Profile = () => {
  const { dataUser } = useProfile();
  const [inputNameActive, setInputNameActive] = useState(false);
  const [inputAboutActive, setInputAboutActive] = useState(false);
  const inputNameRef = useRef<HTMLInputElement | null>(null);
  const inputAboutRef = useRef<HTMLInputElement | null>(null);
  const [Image, setImage] = useState("");
  const [StatePhoto, setStatePhoto] = useState(false);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }

    try {
      const response = await fetch("http://localhost:3000/create_image", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: dataUser?.phoneNumber,
          Image: Image,
        }),
      });

      const result = await response.json();
      window.localStorage.setItem("user", JSON.stringify(result));
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

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
            src={dataUser?.Image ? dataUser?.Image.slice(5) : NoImage}
            alt="Profile.png"
            loading="lazy"
            decoding="async"
            className="w-40 h-40 rounded-full object-cover cursor-pointer"
          />
          <div
            onClick={() => setStatePhoto(!StatePhoto)}
            className="absolute flex justify-center items-center top-0 h-40 rounded-full hover:bg-[#7171719c] cursor-pointer inset-0 opacity-0 hover:opacity-100 transition-all duration-200"
          >
            <FaCamera size={50} />
          </div>
          {StatePhoto ? (
            <div className="absolute flex flex-col gap-1 left-32 top-24 w-full  rounded-lg bg-[#ddd] shadow-2xl ">
              <div className="flex items-center gap-3 py-2 px-4  cursor-pointer hover:bg-[#c5c5c5]">
                <FaRegEye size={20} />
                <h1>View Photo</h1>
              </div>
              <div className="flex items-center gap-3 py-2 px-4 cursor-pointer hover:bg-[#c5c5c5]">
                <FaCamera size={20} />
                <h1>Take Photo</h1>
              </div>
              <div className="flex items-center gap-3 py-2 px-4 cursor-pointer hover:bg-[#c5c5c5]">
                <MdDriveFolderUpload size={15} />
                <input type="file" accept="image/*" onChange={handleChange} />
              </div>
              <hr />
              <div className="flex items-center gap-3  py-2 px-4 cursor-pointer hover:bg-[#c5c5c5]">
                <FaDeleteLeft size={20} />
                <h1>Remove Photo</h1>
              </div>
            </div>
          ) : null}
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
