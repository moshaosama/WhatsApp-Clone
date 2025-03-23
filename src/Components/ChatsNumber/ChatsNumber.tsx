import { CgDetailsMore } from "react-icons/cg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { NavLink } from "react-router";
import InputForm from "../Atoms/InputForm";
import HeaderPage from "../Atoms/HeaderPage";

const ChatsNumber = () => {
  return (
    <>
      <div className="w-96 ">
        <HeaderPage
          Title={"Chats"}
          ActiveIconAdd={true}
          ActiveIconDetails={true}
        />
        <InputForm />
        <div className="mt-2 flex gap-2">
          <NavLink to={""} className="bg-gray-200 p-1 px-3 rounded-full">
            All
          </NavLink>
          <NavLink to={""} className="bg-gray-200 p-1 px-3 rounded-full">
            Unread
          </NavLink>
          <NavLink to={""} className="bg-gray-200 p-1 px-3 rounded-full">
            Favourites
          </NavLink>
          <NavLink to={""} className="bg-gray-200 p-1 px-3 rounded-full">
            Groups
          </NavLink>
        </div>
        <hr className="border-gray-200 mt-2" />
        <div className="overflow-y-scroll  h-[40pc]">
          <div className="flex items-center justify-between gap-3 p-2 cursor-pointer transition-all duration-300 hover:bg-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
                alt="Person.png"
                className="object-cover w-14 h-14 rounded-full"
              />
              <div>
                <h1 className="text-md font-bold">Ahmed Hossam</h1>
                <p>وأنا</p>
              </div>
            </div>
            <div className="bg-[#1DAA61] w-5 h-5 rounded-full flex justify-center items-center">
              <span className="text-white text-md">1</span>
            </div>
          </div>
          <hr className="border-gray-200" />
          {/* ////////////////////////////////////////////////////////////// */}
          <div className="flex items-center justify-between gap-3 p-2 cursor-pointer transition-all duration-300 hover:bg-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
                alt="Person.png"
                className="object-cover w-14 h-14 rounded-full"
              />
              <div>
                <h1 className="text-md font-bold">Ahmed Hossam</h1>
                <p>وأنا</p>
              </div>
            </div>
            <div className="bg-[#1DAA61] w-5 h-5 rounded-full flex justify-center items-center">
              <span className="text-white text-md">1</span>
            </div>
          </div>
          <hr className="border-gray-200" />
          <div className="flex items-center justify-between gap-3 p-2 cursor-pointer transition-all duration-300 hover:bg-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
                alt="Person.png"
                className="object-cover w-14 h-14 rounded-full"
              />
              <div>
                <h1 className="text-md font-bold">Ahmed Hossam</h1>
                <p>وأنا</p>
              </div>
            </div>
            <div className="bg-[#1DAA61] w-5 h-5 rounded-full flex justify-center items-center">
              <span className="text-white text-md">1</span>
            </div>
          </div>
          <hr className="border-gray-200" />
          <div className="flex items-center justify-between gap-3 p-2 cursor-pointer transition-all duration-300 hover:bg-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
                alt="Person.png"
                className="object-cover w-14 h-14 rounded-full"
              />
              <div>
                <h1 className="text-md font-bold">Ahmed Hossam</h1>
                <p>وأنا</p>
              </div>
            </div>
            <div className="bg-[#1DAA61] w-5 h-5 rounded-full flex justify-center items-center">
              <span className="text-white text-md">1</span>
            </div>
          </div>
          <hr className="border-gray-200" />
          <div className="flex items-center justify-between gap-3 p-2 cursor-pointer transition-all duration-300 hover:bg-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
                alt="Person.png"
                className="object-cover w-14 h-14 rounded-full"
              />
              <div>
                <h1 className="text-md font-bold">Ahmed Hossam</h1>
                <p>وأنا</p>
              </div>
            </div>
            <div className="bg-[#1DAA61] w-5 h-5 rounded-full flex justify-center items-center">
              <span className="text-white text-md">1</span>
            </div>
          </div>
          <hr className="border-gray-200" />
          <div className="flex items-center justify-between gap-3 p-2 cursor-pointer transition-all duration-300 hover:bg-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
                alt="Person.png"
                className="object-cover w-14 h-14 rounded-full"
              />
              <div>
                <h1 className="text-md font-bold">Ahmed Hossam</h1>
                <p>وأنا</p>
              </div>
            </div>
            <div className="bg-[#1DAA61] w-5 h-5 rounded-full flex justify-center items-center">
              <span className="text-white text-md">1</span>
            </div>
          </div>
          <hr className="border-gray-200" />
          <div className="flex items-center justify-between gap-3 p-2 cursor-pointer transition-all duration-300 hover:bg-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
                alt="Person.png"
                className="object-cover w-14 h-14 rounded-full"
              />
              <div>
                <h1 className="text-md font-bold">Ahmed Hossam</h1>
                <p>وأنا</p>
              </div>
            </div>
            <div className="bg-[#1DAA61] w-5 h-5 rounded-full flex justify-center items-center">
              <span className="text-white text-md">1</span>
            </div>
          </div>
          <hr className="border-gray-200" />
          <div className="flex items-center justify-between gap-3 p-2 cursor-pointer transition-all duration-300 hover:bg-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
                alt="Person.png"
                className="object-cover w-14 h-14 rounded-full"
              />
              <div>
                <h1 className="text-md font-bold">Ahmed Hossam</h1>
                <p>وأنا</p>
              </div>
            </div>
            <div className="bg-[#1DAA61] w-5 h-5 rounded-full flex justify-center items-center">
              <span className="text-white text-md">1</span>
            </div>
          </div>
          <hr className="border-gray-200" />
          <div className="flex items-center justify-between gap-3 p-2 cursor-pointer transition-all duration-300 hover:bg-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
                alt="Person.png"
                className="object-cover w-14 h-14 rounded-full"
              />
              <div>
                <h1 className="text-md font-bold">Ahmed Hossam</h1>
                <p>وأنا</p>
              </div>
            </div>
            <div className="bg-[#1DAA61] w-5 h-5 rounded-full flex justify-center items-center">
              <span className="text-white text-md">1</span>
            </div>
          </div>
          <hr className="border-gray-200" />
          <div className="flex items-center justify-between gap-3 p-2 cursor-pointer transition-all duration-300 hover:bg-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
                alt="Person.png"
                className="object-cover w-14 h-14 rounded-full"
              />
              <div>
                <h1 className="text-md font-bold">Ahmed Hossam</h1>
                <p>وأنا</p>
              </div>
            </div>
            <div className="bg-[#1DAA61] w-5 h-5 rounded-full flex justify-center items-center">
              <span className="text-white text-md">1</span>
            </div>
          </div>
          <hr className="border-gray-200" />
          <div className="flex items-center justify-between gap-3 p-2 cursor-pointer transition-all duration-300 hover:bg-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
                alt="Person.png"
                className="object-cover w-14 h-14 rounded-full"
              />
              <div>
                <h1 className="text-md font-bold">Ahmed Hossam</h1>
                <p>وأنا</p>
              </div>
            </div>
            <div className="bg-[#1DAA61] w-5 h-5 rounded-full flex justify-center items-center">
              <span className="text-white text-md">1</span>
            </div>
          </div>
          <hr className="border-gray-200" />
          <div className="flex items-center justify-between gap-3 p-2 cursor-pointer transition-all duration-300 hover:bg-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
                alt="Person.png"
                className="object-cover w-14 h-14 rounded-full"
              />
              <div>
                <h1 className="text-md font-bold">Ahmed Hossam</h1>
                <p>وأنا</p>
              </div>
            </div>
            <div className="bg-[#1DAA61] w-5 h-5 rounded-full flex justify-center items-center">
              <span className="text-white text-md">1</span>
            </div>
          </div>
          <hr className="border-gray-200" />
        </div>
      </div>
    </>
  );
};

export default ChatsNumber;
