import HeaderPage from "../Atoms/HeaderPage";

const Profile = () => {
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
      <div className="mt-10 bg-gray-100">
        <h1 className="text-[#008069]">Your name</h1>
      </div>
    </div>
  );
};

export default Profile;
